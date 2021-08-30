import React from "react";
import styled from "styled-components";
import {
  BiFastForward,
  BiPlay,
  BiPause,
  BiSkipPrevious,
  BiSkipNext,
} from "react-icons/bi";
import { IoVolumeHighSharp, IoShuffle } from "react-icons/io5";

function player({
  isPlaying,
  setIsPlaying,
  audioRef,
  currentSong,
  handlePlay,
  handleSkipPrevious,
  musics,
  handlePause,
}) {
  return (
    <Div>
      <div className="container flex-center">
        <div className="container__cd">
          <img src={currentSong.self ? currentSong.self.img : ""} alt="" />
        </div>
        <div className="container__content flex-center">
          <h1>{currentSong.self ? currentSong.self.title : ""}</h1>
          <h2>{currentSong.self ? currentSong.self.singer : ""}</h2>
        </div>
        <div className="container__controls">
          <input
            id="main-control"
            min="0"
            value={currentSong.time ? currentSong.time.toFixed(0) : 0}
            max={currentSong.duration ? currentSong.duration.toFixed(0) : 0}
            type="range"
            name="controls-range"
            id="controls-range"
          />
          <div className="container__controls__options flex-center">
            <div className="icons flex-center">
              <BiSkipPrevious onClick={handleSkipPrevious} />
              <BiFastForward id="flip" />
              <IoVolumeHighSharp className="small" />
              {isPlaying === true ? (
                <BiPause onClick={() => handlePause()} />
              ) : (
                <BiPlay onClick={() => handlePlay()} />
              )}
              <IoShuffle className="small" />
              <BiFastForward />
              <BiSkipNext />
              <input
                id="volume-control"
                type="range"
                min="0"
                step="0.25"
                max="180"
                name="volume-input"
                id="volume-input"
              />
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src=""></audio>
    </Div>
  );
}

export default player;

const Div = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);

  .container {
    width: 100%;
    height: 100%;
    flex-direction: column;

    //first block
    &__cd {
      /* width: clamp(200px, 95%, 350px); */
      height: clamp(50px, 80%, 300px);
      aspect-ratio: 1/1;
      background: #fff;
      border-radius: 50%;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        aspect-ratio: 1/1;
        filter: blur(2px);
      }

      ::after {
        content: "";
        transform: translate(-50%, -50%);
        position: absolute;
        width: 13%;
        aspect-ratio: 1/1;
        background: #fff;
        border-radius: 50%;
        top: 50%;
        left: 50%;
      }

      ::before {
        content: "";
        transform: translate(-50%, -50%);
        position: absolute;
        width: 16%;
        aspect-ratio: 1/1;
        border: 1px solid #fffefe;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        z-index: 3;
      }

      @media screen and (min-width: 525px) {
        height: clamp(50px, 80%, 350px);
      }
    }

    //next block
    &__content {
      flex-direction: column;
      margin-top: 4rem;

      h1 {
        font-weight: 400;
        margin-bottom: 0.3rem;
      }

      h2 {
        font-weight: 300;
        opacity: 0.5;
      }
    }

    //next block
    &__controls {
      margin: 4rem 0;
      width: clamp(300px, 90%, 700px);

      input {
        width: 100%;
      }

      input[type="range"] {
        -webkit-appearance: none;
        margin: 10px 0;
        width: 100%;
      }
      input[type="range"]:focus {
        outline: none;
      }
      input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #fce4ff;
        border-radius: 50px;
        border: 0px solid #000000;
      }
      input[type="range"]::-webkit-slider-thumb {
        box-shadow: 0px 0px 1px #8d8d8d;
        border: 1px solid #dbdbdb;
        height: 19px;
        width: 19px;
        border-radius: 50px;
        background: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -5px;
      }
      input[type="range"]:focus::-webkit-slider-runnable-track {
        background: #fce4ff;
      }
      input[type="range"]::-moz-range-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #fce4ff;
        border-radius: 50px;
        border: 0px solid #000000;
      }
      input[type="range"]::-moz-range-thumb {
        box-shadow: 0px 0px 1px #8d8d8d;
        border: 1px solid #dbdbdb;
        height: 19px;
        width: 19px;
        border-radius: 50px;
        background: #ffffff;
        cursor: pointer;
      }
      input[type="range"]::-ms-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type="range"]::-ms-fill-lower {
        background: #fce4ff;
        border: 0px solid #000000;
        border-radius: 100px;
        box-shadow: 0px 0px 0px #000000;
      }
      input[type="range"]::-ms-fill-upper {
        background: #fce4ff;
        border: 0px solid #000000;
        border-radius: 100px;
        box-shadow: 0px 0px 0px #000000;
      }
      input[type="range"]::-ms-thumb {
        box-shadow: 0px 0px 1px #8d8d8d;
        border: 1px solid #dbdbdb;
        height: 19px;
        width: 19px;
        border-radius: 50px;
        background: #ffffff;
        cursor: pointer;
      }
      input[type="range"]:focus::-ms-fill-lower {
        background: #fce4ff;
      }
      input[type="range"]:focus::-ms-fill-upper {
        background: #fce4ff;
      }

      .icons {
        margin-top: 1.5rem;
        width: clamp(350px, 75%, 75%);
        justify-content: space-around;
        position: relative;

        input {
          position: absolute;
          bottom: -25px;
          width: 150px;
          left: 25%;
        }

        svg {
          font-size: 3rem;
          cursor: pointer;
          opacity: 0.8;
        }

        .small {
          font-size: 2rem;
        }
        #flip {
          transform: scale(-1);
        }

        @media screen and (min-width: 525px) {
          svg {
            font-size: 3.5rem;
          }

          .small {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
`;
