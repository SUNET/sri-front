FROM node:12 as sri-front

WORKDIR /app

COPY . ./
RUN chmod +x bundle-pj.sh copy-bundle.sh

RUN yarn
RUN yarn add babel-plugin-relay
RUN yarn build

RUN mkdir -p /bundle
VOLUME /bundle

ENTRYPOINT ["/app/copy-bundle.sh"]
