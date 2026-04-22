#!/bin/bash

# 构建项目
echo "构建中文项目"
cd chiness
npm install --legacy-peer-deps
npm run build
cd ..

# 构建英文项目
echo "构建英文项目"
cd english
npm install --legacy-peer-deps
npm run build
cd ..

mkdir -p dist/zh dist/en
cp chiness/dist/* dist/zh/
cp english/dist/* dist/en/
cp index.html dist/
