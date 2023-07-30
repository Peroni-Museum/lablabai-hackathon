import React, { useEffect, useMemo, useRef, useState } from 'react';
import sendIcon from './assets/SendButton.svg';
import menuIcon from './assets/Brunch Menu.png';
import './assets/App.css';
import { useWhisper } from '@chengsokdara/use-whisper';

const axios = require('axios');
const cuid = require('cuid');

function App() {
  const {
    recording,
    speaking,
    transcribing,
    transcript,
    pauseRecording,
    startRecording,
    stopRecording,
  } = useWhisper({
    apiKey: process.env.REACT_APP_OPENAI_API_TOKEN, // YOUR_OPEN_AI_TOKEN
    whisperConfig: {
      prompt: 'transcribe',
    },
  });
  const [formValue, setFormValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [recordingStatus, setRecordingStatus] = useState(false); // New state variable
  const messageRef = useRef(null);

  // Callback to scroll to current message when a new one is displayed.
  useEffect(() => {
    const chatRegion = document.querySelector('.chat-region');
    chatRegion.scrollTop = chatRegion.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (transcript.text) {
      setFormValue(transcript.text);
    }
  }, [transcript.text]);

  const apiKey = process.env.REACT_APP_OPENAI_API_TOKEN;

  const userID = useMemo(() => cuid(), []);

// Handle voiceflow request.
async function voiceflowInteract(body) {
  // Send request.
  const response = await axios({
    method: 'POST',
    baseURL: 'https://general-runtime.voiceflow.com',
    url: `/state/user/${userID}/interact`,
    headers: {
      Authorization: apiKey,
    },
    data: body,
  });

  console.log(response);

  // Add the response(s) to messages.
  for (let datIndex in response.data) {
    const data = response.data[datIndex];
    if (data.payload && data.payload.message) {
      const message = data.payload.message;
      console.log(message);
      const splitMessage = message.split('###');
      const textToDisplay = splitMessage.join(' ').trim();
      const textToConvert = splitMessage[1]?.trim();
      setMessages((prev) => [
        ...prev,
        { id: prev.length, text: textToDisplay, type: 'bot' },
      ]);
      if (textToConvert) {
        const audioUrl = await convertTextToAudio(textToConvert);
        setMessages((prev) => [
          ...prev,
          { id: prev.length, audioUrl: audioUrl, type: 'bot' },
        ]);
      }
    }
  }
}

  async function convertTextToAudio(text) {
    const voiceId = '3e0p11OCF95Sr2Lxf92W';
    const apiKey = '15d129edbdd10b7c93370d2191a68f0f';
    const response = await axios({
      method: 'POST',
      baseURL: 'https://api.elevenlabs.io',
      url: `/v1/text-to-speech/${voiceId}`,
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      data: {
        text: text,
        model_id: "eleven_multilingual_v1",
        voice_settings: {
          stability: 0.4,
          similarity_boost: 0.7,
        },
      },
      responseType: 'blob',
    });
    const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
    const audioUrl = URL.createObjectURL(audioBlob);
    return audioUrl;
  }

  // Handle sending message.
  const sendMessage = async (e) => {
    e.preventDefault();

    const text = formValue;

    setMessages((prev) => [
      ...prev,
      { id: prev.length, text: text, type: 'user' },
    ]);

    voiceflowInteract({
      action: {
        type: 'text',
        payload: text,
      },
    }).catch((error) => console.error(error));
    setFormValue('');
    transcript.text = '';
  };

  // Callback to initialize Voiceflow interaction when the page loads.
  useEffect(() => {
    console.log('Run Once');
    voiceflowInteract({
      action: {
        type: 'launch',
        payload: null,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update placeholder text based on recording status
  useEffect(() => {
    if (recording) {
      setRecordingStatus(true);
    } else if (transcribing) {
      setRecordingStatus(false);
    }
  }, [recording, transcribing]);

  // Display content.
  return (
    <div className="App">
      <head>
        <meta
          name="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        ></meta>
      </head>

      <img
        className="bg-image"
        src="https://dkdoes.us/wp-content/uploads/2022/09/Spiral-Chaos.svg"
        alt=""
      ></img>

      <main>
        {/* <MenuOverlay /> */}
        <ul className="chat-region">
          <div className="spacer"></div>
          {messages &&
            messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} inputRef={messageRef} />
            ))}
        </ul>
      </main>

      <footer>
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder={
              recordingStatus ? 'Recording...' : transcribing ? 'Transcribing...' : 'Speak with your translator'
            }
          />

          <button type="submit" disabled={!formValue}>
            <img src={sendIcon} alt="Submit" />
          </button>
        </form>
        <div className="disclaimer">
          <button className="record-button" onClick={() => startRecording()}>
            Start Recording
          </button>
          <button className="stop-button" onClick={() => stopRecording()}>
            Stop
          </button>
        </div>
      </footer>
    </div>
  );
}

// Create frontend for chat message.
function ChatMessage(props) {
  const { text, audioUrl, type } = props.message;

  if (type === 'bot') {
    return (
      <div className={`message ${type}`}>
        {text && <img src="https://dkdoes.us/wp-content/uploads/2020/08/IMG_4484-scaled.jpg" alt="" />}
        {text && <p>{text}</p>}
        {audioUrl && <audio src={audioUrl} controls />}
      </div>
    );
  }
  return (
    <div className={`message ${type}`}>
      <p>{text}</p>
    </div>
  );
}

export default App;