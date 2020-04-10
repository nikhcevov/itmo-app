FROM node:13

WORKDIR /itmo-app/client

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./package.json

RUN yarn global add react-scripts
RUN yarn install

COPY . .

RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /itmo-app/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]