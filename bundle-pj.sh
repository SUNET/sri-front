#!/bin/sh

set -e
set -x

rm -rf bundle/*
cp -r build/* bundle/
