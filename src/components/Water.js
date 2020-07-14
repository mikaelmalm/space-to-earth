import React from "react";
import styled from "@emotion/styled";

import { Cloud, SmallCloud, LargeCloud } from "components";

const StyledWater = styled.div`
  z-index: 5;
  height: 20vh;
  background: #008fa4;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;

  .Cloud {
    width: 10vw;
    opacity: 0.2;
    position: relative;
    top: 5vmin;

    &:nth-child(odd) {
      top: -5vmin;
    }
  }

  .Foams {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 18vh;
    margin: 0 auto;
    z-index: 1;
    height: 100vh;

    .Foam {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;

      width: 35vw;
      height: auto;

      &:nth-child(2) {
        width: 30vw;
        bottom: -5vh;
        left: -8vw;
        transform: rotateY(180deg);
        opacity: 0.95;
      }
    }
  }
`;

const Foam = () => (
  <svg
    width="461"
    height="180"
    viewBox="0 0 461 35"
    fill="none"
    preserveAspectRatio="xMidyMid"
    xmlns="http://www.w3.org/2000/svg"
    className="Foam"
  >
    <ellipse cx="146" cy="68.5089" rx="30" ry="30.6757" fill="#fff" />
    <ellipse cx="122.5" cy="114.011" rx="26.5" ry="27.0968" fill="#fff" />
    <ellipse cx="84" cy="143.153" rx="30" ry="30.6757" fill="#fff" />
    <ellipse cx="190.008" cy="99.6958" rx="33.0078" ry="33.232" fill="#fff" />
    <ellipse cx="156" cy="107.365" rx="30" ry="30.6757" fill="#fff" />
    <ellipse cx="227" cy="123.725" rx="30" ry="30.6757" fill="#fff" />
    <ellipse cx="294" cy="96.1171" rx="38" ry="38.8559" fill="#fff" />
    <ellipse cx="272" cy="131.905" rx="38" ry="38.8559" fill="#fff" />
    <ellipse
      rx="32.0001"
      ry="33.2319"
      transform="matrix(0.999923 0.0124348 -0.0118932 0.999929 323 106.854)"
      fill="#fff"
    />
    <ellipse cx="350" cy="146.732" rx="32" ry="33.232" fill="#fff" />
    <ellipse cx="376" cy="58.2838" rx="29" ry="29.6531" fill="#fff" />
    <ellipse cx="341" cy="83.8468" rx="29" ry="29.6532" fill="#fff" />
    <ellipse cx="395" cy="103.275" rx="29" ry="29.6532" fill="#fff" />
    <ellipse cx="370" cy="113.5" rx="29" ry="29.6532" fill="#fff" />
    <ellipse cx="433" cy="115.545" rx="19" ry="19.4279" fill="#fff" />
    <ellipse cx="77" cy="50.1037" rx="19" ry="19.4279" fill="#fff" />
    <ellipse cx="14" cy="89.9821" rx="14" ry="14.3153" fill="#fff" />
    <ellipse cx="437" cy="10.2252" rx="10" ry="10.2252" fill="#fff" />
    <ellipse cx="448" cy="73.6216" rx="13" ry="13.2928" fill="#fff" />
  </svg>
);

export const Water = () => (
  <StyledWater>
    <div className="Foams">
      <Foam />
      <Foam />
    </div>
    <Cloud />
    <SmallCloud />
    <SmallCloud />
    <Cloud />
    <Cloud />
    <LargeCloud />
    <SmallCloud />
  </StyledWater>
);
