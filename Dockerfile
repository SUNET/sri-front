FROM node:12 as sri-front

WORKDIR /app

COPY . ./

RUN mkdir -p /bundle
VOLUME /bundle

ENTRYPOINT ["/app/bundle-pj.sh"]
