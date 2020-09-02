#!/bin/sh

set -e
set -x

npm i
npm run adapt-queries common
npm run relay-common
npm run build

sh ./copy-bundle.sh
