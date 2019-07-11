#!/bin/bash

docker-compose down -v
docker image prune
docker network prune
docker volume prune
