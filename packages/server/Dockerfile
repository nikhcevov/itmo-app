FROM node:13
RUN apk add --update --no-cache \
    curl
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /itmo-app/server
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

HEALTHCHECK --interval=1m --timeout=3s --start-period=15s \
    CMD curl -fs http://localhost:5000/healthcheck || exit 1

EXPOSE 5000

CMD [ "yarn", "start" ]