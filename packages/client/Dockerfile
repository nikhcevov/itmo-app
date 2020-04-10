FROM node:13

WORKDIR /itmo-app/client

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./package.json

RUN yarn global add react-scripts
RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]