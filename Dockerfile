# # Dockerfile for React client

# # Build react client
# FROM node:17-alpine

# # Working directory be app
# WORKDIR /usr/src/app

# COPY package*.json ./

# ###  Installing dependencies

# RUN npm install --silent

# # copy local files to app folder
# COPY . .

# EXPOSE 3000

# CMD ["npm","start"]



   
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