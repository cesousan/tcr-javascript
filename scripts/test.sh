#!/usr/bin/env bash
jest && git add . && git commit -m working || git checkout HEAD -- src/*