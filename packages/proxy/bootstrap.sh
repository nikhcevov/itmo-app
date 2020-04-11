#!/bin/bash
REGEX=$(perl -e 'print "\$$_" for grep /^[_a-zA-Z]\w*$/, keys %ENV')

echo '1. Recreate deploy dir'
rm -rf deploy
mkdir ./deploy
mkdir ./deploy/nginx

echo '2. Generate production files from templates'
set -a

echo '2.1 Generate server configuration for nginx'
. ./.env &&
    envsubst "$REGEX" <./nginx/server.conf &>./deploy/nginx/server.conf

echo '2.2 Generate client configuration for nginx'
. ./.env &&
    envsubst "$REGEX" <./nginx/client.conf &>./deploy/nginx/client.conf

echo '2.3 Generate certbot init script'
. ./.env &&
    envsubst "$REGEX" <./init-letsencrypt.sh &>./deploy/init-letsencrypt.sh

set +a

echo '3. Start certbot init'
chmod u+x ./deploy/init-letsencrypt.sh
./deploy/init-letsencrypt.sh
