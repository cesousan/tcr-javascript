#!/usr/bin/env bash
while true
do
    git pull --rebase
    git push origin master
done