import React from "react";
import { Tree } from "./Tree";
import styled from "@emotion/styled";

const StyledTrees = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    position: relative;

    .Tree {
      width: 70vmax;
      position: absolute;
      left: 0;
      bottom: 0;

      &:nth-child(1) {
        left: -30vmax;
      }

      &:nth-child(2) {
        width: 40vmax;
        left: -5vmax;
        transform: rotateY(180deg);
        z-index: 2;
      }

      &:nth-child(3) {
        left: 0vmax;
        width: 55vmax;
        transform: rotateY(180deg);
      }

      &:nth-child(4) {
        width: 30vmax;
        left: 20vmax;
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
      </div>
      <div className="right">
        <Tree />
        <Tree />
        <Tree />
        <Tree />
      </div>
    </StyledTrees>
  );
};
