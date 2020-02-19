#!/bin/sh

set -e
set -x

rm -R bundle/*
cp -R build/* bundle/
