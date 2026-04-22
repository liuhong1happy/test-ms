#!/bin/bash

# 构建项目
cd chiness
npm install --legacy-peer-deps
npm run build
cd ..

# 构建英文项目
cd english
npm install --legacy-peer-deps
npm run build
cd ..

echo "推送构建Docker镜像 ${IMAGE_NAME}:${IMAGE_TAG}"
docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${DOCKER_REGISTRY_SERVER}/${IMAGE_NAME}:${IMAGE_TAG}
docker push ${DOCKER_REGISTRY_SERVER}/${IMAGE_NAME}:${IMAGE_TAG}
