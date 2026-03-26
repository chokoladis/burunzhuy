FROM node:25.7.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i -g @nestjs/cli
RUN npm install

CMD [ "npm", "start" ]