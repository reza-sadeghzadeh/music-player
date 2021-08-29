import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <Div className="flex-center">
      <div className="container flex-center">
        <div className="container__cd"></div>
        <div className="container__content flex-center">
          <h1>Music Title</h1>
          <h2>Dinger Name</h2>
        </div>
        <div className="container__controls">
          <input type="range" name="controls-range" id="controls-range" />
          <div className="container__controls__options">
            <h1>bunch of icons here</h1>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default Main;

const Div = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);

  .container {
    width: 100%;
    flex-direction: column;

    @media screen and (min-width: 1500px) {
      width: 1500px;
    }

    //first block
    &__cd {
      width: clamp(250px, 75%, 350px);
      aspect-ratio: 1/1;
      background: #fff;
      border: 1px solid #707070;
      border-radius: 50%;
      position: relative;

      ::after {
        content: "";
        transform: translate(-50%, -50%);
        position: absolute;
        width: 13%;
        aspect-ratio: 1/1;
        background: #fff;
        border: 1px solid #707070;
        border-radius: 50%;
        top: 50%;
        left: 50%;
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
      margin: 4rem 0 8rem;
    }
  }
`;
