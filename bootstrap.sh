#!/bin/bash
# Export envs
. ./.env
REGEX=$(perl -e 'print "\$$_" for grep /^[_a-zA-Z]\w*$/, keys %ENV')

echo '1. Generate production docker-compose file'
envsubst "$REGEX" <./docker-compose-template.yml &>./docker-compose.yml

echo '2. Generate client .envs'
cd ./packages/client
envsubst "$REGEX" <./.env.development.template &>./.env.development
envsubst "$REGEX" <./.env.production.template &>./.env.production
cd ../../

echo '3. Generate database .envs'
cd ./packages/database
envsubst "$REGEX" <./.env.template &>./.env
envsubst "$REGEX" <./init.js.template &>./init.js
cd ../../

echo '4. Generate server .envs'
cd ./packages/server
envsubst "$REGEX" <./.env.template &>./.env
cd ../../