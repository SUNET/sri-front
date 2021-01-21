#!/bin/sh

set -e
set -x

rm -rf /app/node_modules

# get forms version from backend
export FORMS_VERSION=$(curl http://sri-nginx/api/forms/)

# get schema
npm install get-graphql-schema
npx get-graphql-schema http://sri-nginx/api/graphql/ > schema_common.graphql

# make bundle
npm i
npm run adapt-queries common
npm run relay-common
npm run build

# copy to nginx
sh ./copy-bundle.sh

# start development server
npm run start
