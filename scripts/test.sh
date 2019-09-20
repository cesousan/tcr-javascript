#!/usr/bin/env bash
jest --watch && git commit -am working || git checkout HEAD -- "src/main/*"
