FROM node:16.17.1-buster

RUN apt update -y && apt install -y strace sudo
RUN apt install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

RUN sudo mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

RUN echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

RUN sudo apt-get update -y
RUN sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin