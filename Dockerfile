# Dockerfile for React client

FROM node:16-alpine

WORKDIR /client

COPY client/package*.json ./

RUN npm install

COPY client/. .

RUN npm run build

WORKDIR /server

COPY server/package*.json ./

RUN npm install

ENV PORT=8080

EXPOSE 8080

COPY server/. .

CMD ["npm", "start"]