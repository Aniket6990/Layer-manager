import { vscode } from "../utilities/vscode";

export const activateLayerSol = () => {
  vscode.postMessage({
    command: "activate-layer-sol",
  });
};
