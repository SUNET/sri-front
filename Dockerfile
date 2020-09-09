FROM node:12 as sri-front

WORKDIR /app

COPY . ./
RUN chmod +x bundle-pj.sh \
    && chmod +x copy-bundle.sh \
    && npm i \
    && npm run adapt-queries common \
    && npm run relay-common \
    && npm run build \
    && mkdir -p /bundle

VOLUME /bundle

ENTRYPOINT ["/app/copy-bundle.sh"]
