import React, { useEffect, useMemo, useRef, useState } from 'react';
import sendIcon from './assets/SendButton.svg';
import menuIcon from './assets/Brunch Menu.png';
import './assets/App.css';
import { useWhisper } from '@chengsokdara/use-whisper';

const axios = require('axios');
const cuid = require('cuid');
//test
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
      prompt: 'You are a robotics expert',
    },
  });
  const [formValue, setFormValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [recordingStatus, setRecordingStatus] = useState(false); // New state variable
  // State variable to keep track of chat history
  const [chatHistory, setChatHistory] = useState([]);
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

  const apiKey = 'VF.DM.64c45afca0ce390007893772.ShSzDFqaAtBwttCp';

  const userID = useMemo(() => cuid(), []);
  const sessionId = useMemo(() => cuid(), []); // Generate a unique Session ID using the `cuid` library

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

     // Add user input to chat history
     setChatHistory((prevChat) => [
      ...prevChat,
      { sessionId, message: body.action.payload, type: 'user', timestamp: new Date().toISOString() },
    ]);

    console.log(response);

    // Add the response(s) to messages.
    for (let datIndex in response.data) {
      const data = response.data[datIndex];
      if (data.payload && data.payload.message) {
        const message = data.payload.message;
        setChatHistory((prevChat) => [
          ...prevChat,
          { sessionId, message, type: 'bot', timestamp: new Date().toISOString() },
        ]);
        console.log(message);
        setMessages((prev) => [
          ...prev,
          { id: prev.length, text: message, type: 'bot' },
        ]);
        const audioUrl = await convertTextToAudio(message);
        setMessages((prev) => [
          ...prev,
          { id: prev.length, audioUrl: audioUrl, type: 'bot' },
        ]);
      }
    }
  }

  async function convertTextToAudio(text) {
    const voiceId = 'Zxx3frQMtWHOosssmTUz';
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

    // Add user input to chat history
    setChatHistory((prevChat) => [
      ...prevChat,
      { sessionId, message: text, type: 'user', timestamp: new Date().toISOString() },
    ]);

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

  // Function to convert chat history data to CSV format
  function convertToCSV(data) {
    const csvRows = [];
    csvRows.push(['Session ID'| 'Message'| 'Type'| 'Timestamp']);
    data.forEach((entry) => {
      const csvRow = [entry.sessionId, entry.message, entry.type, entry.timestamp].join('~');
      csvRows.push(csvRow);
    });
    return csvRows.join('\n');
  }

  // Function to download the CSV file
  function downloadCSV() {
    const csvData = convertToCSV(chatHistory);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'chat_history.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
              recordingStatus ? 'Recording...' : transcribing ? 'Transcribing...' : 'Speak with Hiro'
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
          <button className="download-button" onClick={downloadCSV}>
            Download Chat History (CSV)
          </button>
        </div>
      </footer>
    </div>
  );
}

// const MenuOverlay = () => {
//   const [showOverlay, setShowOverlay] = useState(false);

//   const handleButtonClick = () => {
//     setShowOverlay(true);
//   }

//   const handleOverlayClick = () => {
//     setShowOverlay(false);
//   }

//   return (
//     <div className="menu-overlay">
//       <button className="menu-button" onClick={handleButtonClick}>
//         <img src={menuIcon} alt="menu" />
//       </button>

//       {showOverlay &&
//         <div className="overlay" onClick={handleOverlayClick}>
//           <img src="https://dkdoes.us/wp-content/uploads/2023/05/DKDiner.png" alt="overlay" />
//         </div>
//       }
//     </div>
//   );
// }

// Create frontend for chat message.
function ChatMessage(props) {
  const { text, audioUrl, type } = props.message;

  if (type === 'bot') {
    return (
      <div className={`message ${type}`}>
        {text && <img src="https://dkdoes.us/wp-content/uploads/2023/07/hiro.png" alt="" />}
        {text && <p>{text}</p>}
        {audioUrl && <audio src={audioUrl} autoPlay />}
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