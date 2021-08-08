#!/usr/bin/env python3
#coding:utf-8
import re
import os
from pathlib import Path
from typing import Match

def find_files(extname:str = ".md") -> list[str]:
    result=[]
    for root, dirs, files in os.walk(".",topdown=True):
        for dir,name in zip(dirs,files):
            #print(os.path.join(root, name))
            if name.endswith(extname): result.append(os.path.join(root,name))
        #result.append((name for name in files if fnmatch.fnmatch(name,extname)))
    return result

now = str()
BASE_URL="http://wiki.blocklynukkit.info"
root = os.getcwd()

def replacer(matched:Match):
    uri = matched.group('url')
    name = matched.group('name')
    if uri.startswith('.'):
        os.chdir(now)
        if not Path(uri).exists():
            os.chdir(root)
            return ''
        else:
            os.chdir(root)
            return f'[{name}]({uri})'
    if uri.startswith(""):0
    return f'[{name}]({uri})' # not complete yet!

if __name__ == "__main__" :
    res = find_files()
    pat = re.compile(r"\[(?P<name>.*?)\]\((?P<url>.*?)\)")
    for name in res:
        #now = os.path.dirname(name)
        #with open('./'+name,'r+',1) as f:
        #    re.sub(pat,replacer,f.read())
        #    pass
        print(name)
        pass
    pass
