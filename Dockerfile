FROM node:12 as sri-front

WORKDIR /app

RUN mkdir -p /bundle
VOLUME /bundle

ADD ./bundle-pj.sh /app/bundle-pj.sh
RUN chmod +x bundle-pj.sh
ENTRYPOINT ["/app/bundle-pj.sh"]
