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
if __name__ == '__main__':
    for file in walker('.'):
        if fnmatch(file,'*.md'):
            #print(file)
            
            with open(file,'r',True,'utf-8') as f:buffer=f.read()
            #buffer = sub(r'\|\s+(\r\n|\r|\n)',r'|  \1',buffer)
            buffer = sub(r'\s+(\r\n|\r|\n)',r'  \1',buffer)
            #buffer = sub(r'\s(\r\n|\r|\n)',r'  \1',buffer)
            buffer = sub(r'\[info\]',r'',buffer)
            buffer = sub(r'\[warning\]',r'',buffer)
            with open(file,'w',True,'utf-8') as f:f.write(buffer)
            
