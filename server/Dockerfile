FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

COPY . /app

RUN npm ci

CMD ["npm", "start"]