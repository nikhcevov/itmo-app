#!/bin/bash

echo '1. Generate production proxy configs'
cd ./packages/proxy
chmod u+x ./bootstrap.sh
./bootstrap.sh
echo '1. Success'

echo '2. Start docker compose'
cd ../../
docker-compose up --build
