echo "构建Docker镜像 ${IMAGE_NAME}:${IMAGE_TAG}"
docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .

echo "推送构建Docker镜像 ${IMAGE_NAME}:${IMAGE_TAG}"
docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${DOCKER_REGISTRY_SERVER}/${IMAGE_NAME}:${IMAGE_TAG}
docker push ${DOCKER_REGISTRY_SERVER}/${IMAGE_NAME}:${IMAGE_TAG}