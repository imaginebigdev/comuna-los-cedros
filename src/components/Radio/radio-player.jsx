import React, { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";

const RadioPlayer = () => {
  const audioPlayerRef = useRef(null);
  return (
    <section>
      <div className="reproductor-container pt-50 text-center">
        <div className="reproductor pb-50">
          <h2 className="color-font">
            ¡Escucha en vivo la Radio de la comuna!
          </h2>
          <AudioPlayer
            className="audio-player green-audio-player"
            ref={audioPlayerRef}
            autoPlay={false}
            src="https://01.solumedia.com.ar:7429/stream?icy=http"
            onPlay={(e) => console.log("onPlay")}
            onPause={(e) => console.log("onPause")}
            onEnded={(e) => console.log("onEnded")}
            style={{
              width: "100%",
              alignItems: "center",
              color: "#69fa26",
            }}
          ></AudioPlayer>
        </div>
      </div>
    </section>
  );
};

export default RadioPlayer;
