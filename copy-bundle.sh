#!/bin/sh

set -e
set -x

rm -r /bundle || true
cp -r /app/build /bundle

find /bundle/. -type f -name "*.js" -print0 | xargs -0 sed -i -e 's@__API_HOST__@'"$REACT_APP_API_HOST"'@g'
find /bundle/. -type f -name "*.js" -print0 | xargs -0 sed -i -e 's@__COOKIE_DOMAIN__@'"$REACT_APP_COOKIE_DOMAIN"'@g'
find /bundle/. -type f -name "*.js" -print0 | xargs -0 sed -i -e 's@__SCHEMA_VERSION__@'"$SCHEMA_VERSION"'@g'
find /bundle/. -type f -name "*.js" -print0 | xargs -0 sed -i -e 's@__LOGIN_URL__@'"$LOGIN_URL"'@g'
