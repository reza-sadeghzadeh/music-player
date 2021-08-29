import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <div className="content">
        <h1>
          Music <span>P</span>layer
        </h1>
        <button className="btn">Library</button>
      </div>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d2d2d2;

  .content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;

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
