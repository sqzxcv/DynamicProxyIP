#!/bin/bash

git pull 
workon scrapyd_py3.6.1 
pip install -r requirements.txt
pm2 reload start.py -x --interpreter /root/Envs/scrapyd_py3.6.1/bin/python