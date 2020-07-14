import React from "react";
import { Tree } from "./Tree";
import styled from "@emotion/styled";

const StyledTrees = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    position: relative;

    .Tree {
      height: 100vmin;
      position: absolute;
      left: 0;
      bottom: 0;

      &:nth-child(1) {
        left: -40vmin;
      }

      &:nth-child(2) {
        height: 70vmin;
        left: -8vmin;
        transform: rotateY(180deg);
        z-index: 2;
      }

      &:nth-child(3) {
        left: -3vmin;
      }

      &:nth-child(4) {
        height: 68vmin;
        left: 20vmin;
        transform: rotateY(180deg);
      }

      &:nth-child(5) {
        height: 60vmin;
        left: 35vmin;
      }
    }

    &.right {
      transform: rotateY(180deg);
      right: 0;
    }
  }
`;

export const Trees = () => {
  return (
    <StyledTrees className="Trees">
      <div className="left">
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
      </div>
      <div className="right">
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
      </div>
    </StyledTrees>
  );
};
