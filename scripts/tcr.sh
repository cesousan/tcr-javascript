#!/usr/bin/env bash
./scripts/test.sh && ./scripts/commit.sh || ./scripts/revertSoft.sh