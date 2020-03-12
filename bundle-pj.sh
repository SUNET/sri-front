#!/bin/sh

set -e
set -x

yarn build
rm -rf bundle/*
cp -r build/* bundle/
