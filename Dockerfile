FROM node:12 as sri-front

WORKDIR /app

COPY . ./
RUN chmod +x bundle-pj.sh; chmod +x copy-bundle.sh

RUN npm i; npm run adapt-queries; npm run relay; npm run build

RUN mkdir -p /bundle
VOLUME /bundle

ENTRYPOINT ["/app/copy-bundle.sh"]
