FROM node:8 as sri-front

WORKDIR /app
COPY . ./

RUN mkdir -p /app/bundle
VOLUME /app/bundle

ARG API_HOST
ARG COOKIE_DOMAIN

RUN sed -i "s|{API_HOST}|$API_HOST|g" src/config.js &&\
    sed -i "s|{COOKIE_DOMAIN}|$COOKIE_DOMAIN|g" src/config.js

RUN yarn
RUN yarn add babel-plugin-relay
RUN yarn build

ADD ./bundle-pj.sh /app/bundle-pj.sh
RUN chmod +x bundle-pj.sh
ENTRYPOINT ["/app/bundle-pj.sh"]
