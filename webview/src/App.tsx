import React from "react";
import styled from "styled-components";
import { activateLayerSol } from "./configuration/webviewpostmsg";
import { SiSolidity } from "react-icons/si";

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: var(--vscode-icon-foreground);
  font-size: 14px;
  gap: 20px;
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
        <SiSolidity></SiSolidity> Work with solidity
      </Button>
    </Container>
  );
};

export default App;
