import * as vscode from "vscode";
import { getUri } from "../utilities/getUri";

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;
  private readonly context: vscode.ExtensionContext;

  constructor(
    private readonly _extensionUri: vscode.Uri,
    _context: vscode.ExtensionContext
  ) {
    this.context = _context;
  }

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,

      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(
      this.context,
      webviewView.webview
    );

    // Listen for messages from the Sidebar component and execute action
    webviewView.webview.onDidReceiveMessage(async (message) => {
      switch (message.command) {
        case "activate-layer-sol": {
          vscode.commands.executeCommand("layermgr.layerSol");
          break;
        }
      }
    });
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(
    context: vscode.ExtensionContext,
    webview: vscode.Webview
  ) {
    const scriptUri = webview.asWebviewUri(
      getUri(context, ["webview", "build", "static", "js", "main.js"])
    );

    // Use a nonce to only allow a specific script to be run.
    const nonce = getNonce();

    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>ETHcode-layer</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <script src="${scriptUri}"></script>
      </body>
    </html>`;
  }
}

function getNonce() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
