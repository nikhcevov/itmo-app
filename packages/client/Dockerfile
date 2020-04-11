# build environment
FROM node:13 as build
WORKDIR /itmo-app/client

ENV PATH ./node_modules/.bin:$PATH
COPY package.json ./

RUN yarn install
RUN yarn global add react-scripts
COPY . .
RUN yarn build
