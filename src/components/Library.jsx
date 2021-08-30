import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Library({ libOpen, musics, handleLibClick }) {
  const animationProps = {
    initial: {
      left: -500,
    },
    then: {
      left: libOpen ? 0 : -400,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Div variants={animationProps} animate="then" initial="initial">
      <ul>
        {musics.map((m) => (
          <motion.li
            onClick={(e) => handleLibClick(e)}
            animate={{
              translateX: libOpen ? 0 : -100,
              opacity: libOpen ? 1 : 0,
              transition: {
                duration: libOpen ? 0.2 : 0.5,
                delay: libOpen ? m.id * 0.1 : 0,
              },
            }}
            key={m.id}
          >
            <div className="flex-center">
              <img src={m.img} alt={`${m.singer}`} />
              <div className="content flex-center">
                <h3>{m.title}</h3>
                <h4>{m.singer}</h4>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </Div>
  );
}

export default Library;

const Div = styled(motion.aside)`
  z-index: 3;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: clamp(350px, 25%, 400px);
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
    border-top: 1px solid #f5f5f5;
    transition: 0.3s ease all;
    border-bottom: 1px solid #f5f5f5;

    :hover {
      background-color: #fce4ff;
      border-bottom: 1px solid #f07cff;
      border-top: 1px solid #f07cff;
      cursor: pointer;
    }
  }

  div {
    height: 120px;
    justify-content: flex-start;
    padding: 0 0 0 2rem;
    pointer-events: none;

    :hover {
      cursor: pointer;
    }

    img {
      width: 90px;
      object-fit: cover;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }

    .content {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h3 {
        margin-bottom: 0.4rem;
        font-weight: 500;
      }
      h4 {
        opacity: 0.8;
        font-weight: 300;
      }
    }
  }
`;
