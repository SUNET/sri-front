#!/bin/sh

set -e
set -x

cp -r /source/* /app/

yarn
yarn add babel-plugin-relay
yarn build

rm -rf /bundle/*
cp -r build/* /bundle/
