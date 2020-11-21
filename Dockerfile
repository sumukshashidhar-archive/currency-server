FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g pm2

COPY ./src .

EXPOSE 9000

CMD ["pm2-runtime", "app.js"]