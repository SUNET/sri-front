FROM node:12 as sri-front

WORKDIR /app

ADD ./bundle-pj.sh /app/bundle-pj.sh
RUN chmod +x bundle-pj.sh

COPY . ./

RUN mkdir -p /bundle
VOLUME /bundle

ENTRYPOINT ["/app/bundle-pj.sh"]
