import React from "react";
import AudioPlayer from "./AudioPlayer";

const AUDIO_FILE = "URL_OF_AUDIO_FILE";

function App() {
  return (
    <div className="container">
      <AudioPlayer audioSrc={AUDIO_FILE} />
    </div>
  );
}

export default App;
