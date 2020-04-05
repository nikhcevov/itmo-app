FROM node:13

WORKDIR /itmo-app/server

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./package.json

RUN yarn install

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

CMD [ "yarn", "dev" ]