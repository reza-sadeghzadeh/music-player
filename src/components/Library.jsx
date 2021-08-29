import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllSongs } from "../musics";

function Library() {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    setMusics(getAllSongs());
  }, []);

  return (
    <Div>
      <ul>
        {musics.map((m) => (
          <li key={m.id}>
            <div className="flex-center">
              <img src={m.img} alt={`${m.singer}'s photo`} />
              <div className="content flex-center">
                <h3>{m.title}</h3>
                <h4>{m.singer}</h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Div>
  );
}

export default Library;

const Div = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: clamp(300px, 20%, 350px);
  overflow-y: scroll;
  background-color: white;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    appearance: none;
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    appearance: none;
    background-color: #eeeeee;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 50px;
  }

  li {
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;

    :hover {
      border-bottom: 1px solid #f07cff;
      border-top: 1px solid #f07cff;
      cursor: pointer;
    }
  }

  div {
    height: 120px;
    justify-content: flex-start;
    transition: 0.3s ease all;
    padding: 0 0 0 2rem;

    :hover {
      background-color: #fce4ff;
      cursor: pointer;
    }

    img {
      width: 30%;
      object-fit: cover;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }

    .content {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h2 {
      }
    }
  }
`;
