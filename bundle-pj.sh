#!/bin/sh

set -e
set -x

rm -rf /app/node_modules

npm i
npm run adapt-queries common
npm run relay-common
npm run build

sh ./copy-bundle.sh
