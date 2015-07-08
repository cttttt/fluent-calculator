FROM ubuntu
RUN apt-get update
RUN apt-get install -y curl
RUN \
 curl -sL https://deb.nodesource.com/setup_0.12 | bash - && \
 apt-get install -y nodejs
RUN npm install -g tape tap-spec
RUN useradd -m node
CMD su - node bash -c 'cd /home/node && npm test'

COPY . /home/node


