#!/bin/sh

set -e
set -x

rm -rf /bundle/*

find build/. -type f -name "*.js" -print0 | xargs -0 sed -i -e 's@__API_HOST__@'"$REACT_APP_API_HOST"'@g'
find build/. -type f -name "*.js" -print0 | xargs -0 sed -i -e 's@__COOKIE_DOMAIN__@'"$REACT_APP_COOKIE_DOMAIN"'@g'
find build/. -type f -name "*.js" -print0 | xargs -0 sed -i -e 's@__SCHEMA_VERSION__@'"$SCHEMA_VERSION"'@g'

cp -r build/* /bundle/
