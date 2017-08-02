#!/bin/bash

cd /var/www/DynamicProxyIP/
git pull 
workon scrapyd_py3.6.1 
#pip install -r requirements.txt
echo "当前执行路径" + $(pwd)
#pm2 reload start.py -x --interpreter /root/Envs/scrapyd_py3.6.1/bin/python