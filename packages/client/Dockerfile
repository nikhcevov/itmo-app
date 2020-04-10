FROM node:13 as build

WORKDIR /itmo-app/client

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./package.json

RUN yarn global add react-scripts
RUN yarn install

COPY . .

RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /itmo-app/client/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY certs /etc/nginx/certs
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]