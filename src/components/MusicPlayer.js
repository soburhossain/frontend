import React from "react";

export default function MusicPlayer() {
  return (
    <div>
      <div className="music-player" id="music-nav">
        <div className="music-icons">
          <button className="music-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="music-icon left-chevron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button className="music-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="music-icon icon-bar"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="song-heading">
          <img
            src="img/song.jpg"
            alt="Singing song"
            title="Singer"
            className="music-img"
          />
          <h4>Let Me Down Slowly</h4>
          <h5>Alec Benzamin</h5>
        </div>

        <div className="song-section">
          <audio controls className="control">
            <source
              src="song/Paul-Pee-Let-me-down-slowly.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
    </div>
  );
}
