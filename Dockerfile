# 使用官方Nginx镜像作为基础镜像
FROM nginx:1.30.0-alpine3.23-slim

# 移除默认的Nginx配置
RUN rm /etc/nginx/conf.d/default.conf

# 复制自定义的Nginx配置文件
COPY nginx.conf /etc/nginx/conf.d/

# 复制构建产物
COPY dist /usr/share/nginx/html/

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]