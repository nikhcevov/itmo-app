FROM node:13

WORKDIR /itmo-app/server

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./package.json

RUN yarn install

CMD [ "yarn", "dev" ]