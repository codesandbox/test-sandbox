{
  "name": "Test Sandbox",
  "build": {
    "context": ".",
    "dockerfile": "Dockerfile"
  },
  "workspaceMount": "source=${localWorkspaceFolder},target=/workspace,type=bind,consistency=cached",
  "workspaceFolder": "/workspace",
  "forwardPorts": [3000]
}