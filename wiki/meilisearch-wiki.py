import os
import re
import requests
import json
from pypinyin import lazy_pinyin, Style

title_regex = re.compile(r'[#]{1,6} ?.*')
index_regex = re.compile(r'[^a-z_A-z0-9-]')

def countFiles(root_path, total_files):
	assert os.path.exists(root_path)
	item_list = os.listdir(root_path)
	for item in item_list:
		next_path = os.path.join(root_path, item)
		if os.path.isfile(next_path):
			total_files.append(next_path)
		else:
			countFiles(next_path, total_files)
	return total_files

def mdProcess(inputMD: str):
    # 处理纯标题
    if inputMD.find('\n') == -1:
        return inputMD.replace("# ",'').replace(" ",'')
    # 处理内容中的md符号，我们只要纯文本
    regexes = [
        r'[#]{1,6} (?=[^#\n]*?\n)',
        r'\*{3,999} *\n',
        r'\|-*?(?=\|-)', r'\|-*?\| {0,2}\n',
        r'```(\n|javascript|python|js|py|md|markdown|php|lua|c|cpp|clike|ruby|clojure|rust|flow|css|shell|powershell|glsl|json|yml|yaml)\n?',
        r'!\[.*?\]\(.*?\)( *\n)',
        r'-{3,999} *\n',
        '~~',
    ]
    for regex in regexes:
        inputMD = re.sub(regex, '', inputMD)
    
    return inputMD
    

if __name__ == "__main__":
    # wiki目录
    working_dir = os.path.dirname(os.path.dirname(__file__))
    # 获取所有文件
    files_absolute = countFiles(working_dir, [])
    # 挑选出非javadoc的markdown文件转为相对路径
    files_relative = []
    for each in files_absolute:
        if each.endswith(".md"):
            relative_path = each.replace(working_dir, '').replace('\\', '/')
            if not relative_path.startswith("/javadoc"):
                if not relative_path.endswith(".md") and relative_path.endswith("md"):
                    relative_path = relative_path[:-2] + '.md'
                files_relative.append(relative_path)
    # 读取所有文件
    files_content = {}
    for each in files_relative:
        print("reading " + each)
        with open(working_dir + each, 'r', encoding='utf-8') as f:
            files_content[each] = f.read()
    # 匹配标题
    document = []
    for path, content in files_content.items():
        passage_titles = title_regex.findall(content)
        if len(passage_titles) == 0:
            print(path)
            continue
        id = re.sub(r'[^a-zA-Z0-9-_]', '',  '_'.join(lazy_pinyin(path[1:].replace('/','-').replace('.md', ''))))
        document.append({
            'id': id,
            'title': mdProcess(passage_titles[0]),
            'path': path,
            'titles': passage_titles,
            'content': mdProcess(content)
        })
    # 发送结果
    dt = json.dumps(document)
    KEY = os.getenv("Meili_API_Key")
    print("key: " + KEY + " len: " + len(KEY))
    result = requests.post(url='http://49.232.170.120:7700/indexes/wiki/documents', data=dt, headers={'Content-Type':'application/json', 'X-Meili-API-Key': KEY})
    
    print("OK:" + result.text)