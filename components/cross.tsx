import React from 'react';
import styled from 'styled-components';

const CrossButton = () => {
  return (
    <StyledWrapper>
      <button className="button">x</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    height: 35px;
    width:35px;
    margin: auto;
    align-items: center;
    border-radius: 50px;
    border: none;
    text-align: center;
    color: transparent;
    text-shadow: 0 0 0 rgb(255, 255, 255);
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: transform 50ms ease;
    background: linear-gradient(90deg, #5f03f4, #f441a5, #b81fff, #5f03f4);
    background-size: 400%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    font-family: "Montserrat", sans-serif;
  }

  .button:hover {
    -webkit-box-shadow: 0px 0px 15px 0px rgba(155, 0, 194, 0.9);
    -moz-box-shadow: 0px 0px 15px 0px rgba(155, 0, 194, 0.9);
    box-shadow: 0px 0px 15px 0px rgba(155, 0, 194, 0.9);
    animation: animate 8s ease infinite;
    transition: box-shadow, 0.4s;
    border: none;
    font-size: 19px;
    transform: scale(1.05, 1.05);
    background: linear-gradient(90deg, #5f03f4, #f441a5, #b81fff, #5f03f4);
    background-size: 400%;
  }

  .button:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }`;

export default CrossButton;
