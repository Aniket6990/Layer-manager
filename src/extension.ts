import * as vscode from "vscode";
import { SidebarProvider } from "./panels/SidebarPanel";

// eslint-disable-next-line import/prefer-default-export
export async function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri, context);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "layermgr-sidebar",
      sidebarProvider
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("layermgr.layerSol", () => {
      vscode.commands.executeCommand("layer.activate");
    })
  );
}
