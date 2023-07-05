import React, { useRef } from "react";
import AudioPlayer from "react-audio-player";

const RadioPlayer = () => {
  const audioPlayerRef = useRef(null);
  return (
    <section>
      <div className="reproductor-container pt-100 text-center" id="radio">
        <div className="reproductor pb-80 pt-80">
          <h2 className="color-font pb-50">
            ¡Escuchá en vivo la Radio de la comuna!
          </h2>
          <AudioPlayer
            className="play"
            src="https://01.solumedia.com.ar:7429/stream?icy=http"
            controls
            width="400px"
            height="50px"
            autoPlay={false}
          />
        </div>
      </div>
    </section>
  );
};

export default RadioPlayer;
