FROM jfrog.petrobras.dev.br/imagens/docker/library/node:25
COPY debian.sources /etc/apt/sources.list.d/debian.sources
COPY petro-ca.crt /usr/local/share/ca-certificates/petro-ca.crt
RUN update-ca-certificates
COPY npmrc /root/.npmrc
COPY yarnrc.yml /root/.yarnrc.yml
RUN npm install -g corepack --force
RUN corepack enable
RUN npm config set strict-ssl false
RUN wget --no-check-certificate https://jfrog.petrobras.dev.br/artifactory/third-party-raw-files/yarn/yarn4.4.1.js
RUN chmod +x yarn4.4.1.js
RUN mv yarn4.4.1.js /usr/local/bin/yarn
RUN apt-get update -y && apt-get upgrade -y && apt clean all