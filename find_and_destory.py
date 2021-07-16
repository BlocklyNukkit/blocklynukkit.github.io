#! /usr/bin/env python3
#coding:utf-8
u'''
每次新加入了markdown文件都记得运行一下这个文件哦！
'''
from pathlib import Path
from fnmatch import fnmatch
from re import sub
import os,os.path
def walker(where:str,isfiler:bool = True):
    for root,dirs,files in os.walk(r"."):
        for file in files:
            res = os.path.join(root,file)
            if os.path.isfile(res) and isfiler:yield res
            elif os.path.isdir(res) and not isfiler:yield res
