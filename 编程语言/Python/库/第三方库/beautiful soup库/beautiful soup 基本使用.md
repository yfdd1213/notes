```python
from bs4 import BeautifulSoup

# 要解析的HTML文档
html_doc = """
<html>
<head>
    <title>Example Page</title>
</head>
<body>
    <div class="content">
        <h1>Header 1</h1>
        <p>This is a paragraph.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
</body>
</html>
"""

# 创建Beautiful Soup对象
soup = BeautifulSoup(html_doc, 'html.parser')

# 打印整个文档内容
print(soup.prettify())

# 提取标题
title = soup.title
print("Title:", title.text)

# 提取第一个<h1>标签的文本内容
header = soup.h1
print("Header:", header.text)

# 提取第一个<p>标签的文本内容
paragraph = soup.p
print("Paragraph:", paragraph.text)

# 提取所有<li>标签的文本内容
list_items = soup.find_all('li')
print("List Items:")
for item in list_items:
    print(item.text)

```



