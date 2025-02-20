import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="cube">
          <div className="face front" />
          <div className="face back" />
          <div className="face left" />
          <div className="face right" />
          <div className="face top" />
          <div className="face bottom" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    perspective: 800px;
  }

  .cube {
    width: 40px;
    height: 40px;
    position: relative;
    transform-style: preserve-3d;
    animation: spin 3s linear infinite;
  }

  .face {
    width: 40px;
    height: 40px;
    position: absolute;
    opacity: 0.8;
  }

  .front {
    transform: translateZ(20px);
    background-color: #3498db;
  }

  .back {
    transform: translateZ(-20px);
    background-color: #e74c3c;
  }

  .left {
    transform: rotateY(90deg) translateZ(20px);
    background-color: #2ecc71;
  }

  .right {
    transform: rotateY(-90deg) translateZ(20px);
    background-color: #f39c12;
  }

  .top {
    transform: rotateX(90deg) translateZ(20px);
    background-color: #9b59b6;
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(20px);
    background-color: #e67e22;
  }

  @keyframes spin {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }

    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }`;

export default Loader;
