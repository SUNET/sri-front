#!/bin/sh

set -e
set -x

yarn
yarn add babel-plugin-relay
yarn build

sh ./copy-bundle.sh
