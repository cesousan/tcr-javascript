#!/usr/bin/env bash
jest && git commit -am working || git checkout HEAD -- "src/main/*"
