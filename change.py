from pathlib import Path
from fnmatch import fnmatch
from re import sub
for file in Path('.').iterdir():
    if fnmatch(file,'*.md'):
        with open(file,'r',True,'utf-8') as f:buffer=f.read()
        buffer = sub(r'(?s)(\r\n|\r|\n)',r'  \1',buffer)
        with open(file,'w',True,'utf-8') as f:f.write(buffer)
