import React, { useContext } from "react";
import styled from "styled-components";
import { allContext } from "../contexts";

function Navbar() {
  const { state, actions, dispatch } = useContext(allContext);

  const handleLibOpen = () => {
    dispatch({
      type: actions.setLibopen,
      payload: { libopen: !state.libopen },
    });
  };

  return (
    <Nav className="flex-center">
      <div className="content flex-center">
        <h1>
          Music <span>P</span>layer
        </h1>
        <button onClick={handleLibOpen} className="btn">
          Library
        </button>
      </div>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  height: 80px;
  border-bottom: 1px solid #d2d2d2;

  .content {
    justify-content: space-around;
    width: 100%;

    h1 {
      font-size: 2rem;
    }

    button {
      padding: 0.5rem 1.4rem;
      font-size: small;
    }

    @media screen and (min-width: 1500px) {
      width: 1500px;
    }

    @media screen and (min-width: 500px) {
      h1 {
        font-size: 2.5rem;
      }

      button {
        padding: 0.9rem 2.3rem;
        font-size: medium;
      }
    }

    h1 {
      cursor: pointer;
      position: relative;
      background-color: transparent;
    }
  }
`;
