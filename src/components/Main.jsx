import React from "react";
import styled from "styled-components";

import {
  BiFastForward,
  BiPlay,
  BiSkipPrevious,
  BiSkipNext,
} from "react-icons/bi";
import { IoVolumeHighSharp, IoShuffle } from "react-icons/io5";

function Main() {
  return (
    <Div className="flex-center">
      <div className="container flex-center">
        <div className="container__cd">
          <img src="" alt="" />
        </div>
        <div className="container__content flex-center">
          <h1>Music Title</h1>
          <h2>Dinger Name</h2>
        </div>
        <div className="container__controls">
          <input type="range" name="controls-range" id="controls-range" />
          <div className="container__controls__options flex-center">
            <div className="icons flex-center">
              <BiSkipPrevious />
              <BiFastForward id="flip" />
              <IoVolumeHighSharp className="small" />
              <BiPlay />
              <IoShuffle className="small" />
              <BiFastForward />
              <BiSkipNext />
              <input type="range" name="volume-input" id="volume-input" />
            </div>
          </div>
        </div>
      </div>
      <audio
        src="https://dl.naslemusic.com/music/1395/03/Amin%20Habibi%20-%20Baghalam%20Kon.mp3"
        autoPlay
      ></audio>
    </Div>
  );
}

export default Main;

const Div = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);

  .container {
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media screen and (min-width: 1500px) {
      width: 1500px;
    }

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
        height: 100%;
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
        margin-bottom: 0.2rem;
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
          font-size: 3.5rem;
          cursor: pointer;
          opacity: 0.8;
        }

        .small {
          font-size: 2.5rem;
        }
        #flip {
          transform: scale(-1);
        }
      }
    }
  }
`;
