{
  "name": "Test Sandbox",
  "build": {
    "context": ".",
    "dockerfile": "Dockerfile"
  },
  "service": "app",
  "workspaceMount": "source=${localWorkspaceFolder},target=/workspace,type=bind,consistency=cached",
  "workspaceFolder": "/workspace",
  "portsAttributes": {
    "3000": {
      "label": "Application port",
      "requireLocalPort": true
    }
  }
}
