#!/bin/bash

rm -rf acme.json
touch acme.json
chmod 600 acme.json

docker network create web

docker run \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $PWD/traefik.toml:/traefik.toml \
  -v $PWD/acme.json:/acme.json \
  -p 80:80 \
  -p 443:443 \
  -l traefik.frontend.rule=Host:monitor.sb0101.ru \
  -l traefik.port=8080 \
  --network web \
  --name traefik \
  traefik:1.7