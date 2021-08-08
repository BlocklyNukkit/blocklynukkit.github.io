#!/usr/bin/env python3
#coding:utf-8
import re
import os
import fnmatch
from typing import Match, Pattern

def find_files(extname:str = "*.md") -> list[str]:
    result=[]
    for root, dirs, files in os.walk(".", topdown=False):
        for name in files:
            #print(os.path.join(root, name))
            if fnmatch.fnmatch(name,extname): result.append(name)
        #result.append((name for name in files if fnmatch.fnmatch(name,extname)))
    return result

def replacer(matched:Match):
    uri = matched.group('url')
    name = matched.group('name')
    pass
    return f'[{name}]({uri})' # not complete yet!

if __name__ == "__main__" :
    res = find_files()
    pat = re.compile(r"\[(?P<name>.*?)\]\((?P<url>.*?)\)")
    for name in res:
        with open(name,'r+',1) as f:
            re.sub(pat,replacer,f.read())
            pass
        pass
    pass
