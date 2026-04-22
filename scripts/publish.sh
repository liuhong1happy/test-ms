echo "开始重启k8s Deployment，更新Pod"
kubectl rollout restart deployment ${IMAGE_NAME} -n website &&
echo '等待Deployment重启完成' &&
kubectl rollout status deployment ${IMAGE_NAME} -n website --timeout=120s
echo "验证Pod状态"
kubectl get pods -l app=${IMAGE_NAME} -n website