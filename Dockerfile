FROM node:12-alpine3.12

WORKDIR /app

COPY . ./

RUN apk add curl; chmod +x bundle-pj.sh; chmod +x copy-bundle.sh

RUN npm i; npm run adapt-queries common; npm run relay-common; npm run build;\
    rm -rf /app/node_modules

ENTRYPOINT ["/app/copy-bundle.sh"]
