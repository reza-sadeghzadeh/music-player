import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Alert({ audioRef, controlVol }) {
  return (
    <Div initial={{ opacity: 0 }} animate={controlVol}>
      <h2>
        <span>
          {audioRef.current ? Math.round(audioRef.current.volume * 100) : ""}%
        </span>
      </h2>
    </Div>
  );
}

export default Alert;

const Div = styled(motion.div)`
  position: absolute;
  padding: 2rem 0;
  width: 150px;
  text-align: center;
  right: 1%;
  top: 90px;
  opacity: 1;
  z-index: 6;
  background-color: #2e2e2e;
  color: white;
  border-radius: 10px;
  span {
    font-size: 3rem;
    font-weight: 200;
  }
`;
