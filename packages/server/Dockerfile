FROM node:13 as build

WORKDIR /itmo-app/server
ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./
RUN yarn install

COPY . .
RUN ./node_modules/.bin/babel ./src -d build --copy-files

# HEALTHCHECK --interval=1m --timeout=3s --start-period=15s \
#     CMD curl -fs http://localhost:5000/healthcheck || exit 1

EXPOSE 5000

CMD [ "yarn", "start" ]
