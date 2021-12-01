FROM node:10-alpine

RUN mkdir -p /server
WORKDIR /server

COPY package.json /server
COPY package-lock.json /server
COPY . /server

RUN npm ci

CMD ["npm", "start"]