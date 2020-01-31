FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn add babel-plugin-relay
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
RUN mkdir /cert
COPY cert/localenv.crt /cert/localenv.crt
COPY cert/localenv.key /cert/localenv.key
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
