FROM node:17-alpine3.12 as base

WORKDIR /src
COPY package*.json /
EXPOSE 3000

FROM base as dev
ENV NODE_ENV=development
RUN  npm install
COPY . /