import React from 'react';
import styled from 'styled-components';

const DownloadButton = () => {
  return (
    <StyledWrapper>
      <button className="Download-button">
        <svg viewBox="0 0 640 512" width={20} height={16} xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
        </svg>
        <span>Download</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Download-button {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 17px;
    padding: 12px 20px;
    color: white;
    background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em rgba(59, 48, 78, 0.527);
    letter-spacing: 0.05em;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;
  }

  .Download-button svg {
    margin-right: 8px;
    width: 25px;
  }

  .Download-button:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #3b82f6;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .Download-button:active {
    box-shadow: 0 0.3em 1em -0.5em #3b82f6;
  }

  .Download-button::before {
    content: "";
    width: 4px;
    height: 40%;
    background-color: white;
    position: absolute;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
    transition: all 0.2s;
  }

  .Download-button::after {
    content: "";
    width: 4px;
    height: 40%;
    background-color: white;
    position: absolute;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 0;
    transition: all 0.2s;
  }

  .Download-button:hover::before,
  .Download-button:hover::after {
    height: 60%;
  }

  .Download-button:hover::before {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    transform: translate(5px, -15px) rotate(45deg);
  }

  .Download-button:hover::after {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    transform: translate(-5px, 15px) rotate(45deg);
  }`;

export default DownloadButton;
