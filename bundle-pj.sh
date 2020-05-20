#!/bin/sh

set -e
set -x

yarn
yarn add babel-plugin-relay
yarn build

rm -rf /bundle/*
cp -r build/* /bundle/
