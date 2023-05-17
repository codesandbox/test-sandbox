{
  "name": "Test Sandbox",
  "build": {
    "context": ".",
    "dockerfile": "Dockerfile"
  },
  "workspaceMount": "source=${localWorkspaceFolder},target=/workspace,type=bind,consistency=cached",
  "workspaceFolder": "/workspace",
  "forwardPorts": [3000],
  "postCreateCommand": "yarn install",
  "postStartCommand": "yarn dev"
}
