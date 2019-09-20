#!/usr/bin/env bash
git stash drop 0 2&>/dev/null; git add -A && git stash push