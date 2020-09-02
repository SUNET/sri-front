#!/bin/sh

set -e
set -x

npm i
npm run adapt-queries
npm run relay
npm run build

sh ./copy-bundle.sh
