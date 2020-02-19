FROM node:8 as sri-front

WORKDIR /app

COPY . ./

RUN mkdir -p /app/bundle
VOLUME /app/bundle

RUN yarn
RUN yarn add babel-plugin-relay
RUN yarn build

ADD ./bundle-pj.sh /app/bundle-pj.sh
RUN chmod +x bundle-pj.sh
ENTRYPOINT ["/app/bundle-pj.sh"]
