import React from "react";
import styled from "styled-components";
import { activateLayerSol } from "./configuration/webviewpostmsg";

const Container = styled.div`
  width: 100vw;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: var(--vscode-icon-foreground);
  font-size: 14px;
  gap: 20px;
  overflow: hidden;
`;

const Button = styled.button`
  width: 100%;
  color: var(--vscode-icon-foreground);
  background-color: var(--vscode-button-background);
  border: none;
  border-radius: 4px;
  padding: 8px;
  &:hover {
    background-color: var(--vscode-button-hoverBackground);
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <Container>
      <span>
        Open Hardhat project to interact with solidity smart contracts.
      </span>
      <Button
        onClick={(e) => {
          activateLayerSol();
        }}
      >
        Solidity project
      </Button>
    </Container>
  );
};

export default App;
