FROM node:12-alpine3.12

ARG SCHEMA_VERSION=sunet
WORKDIR /app

COPY . ./

RUN apk add curl; chmod +x bundle-pj.sh; chmod +x copy-bundle.sh

RUN npm i; npm run adapt-queries $SCHEMA_VERSION; npm run relay-${SCHEMA_VERSION}; npm run build;\
    rm -rf /app/node_modules

ENTRYPOINT ["/app/copy-bundle.sh"]
