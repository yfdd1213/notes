##### [[lxml.etree._Element 创建]]
##### [[lxml.etree._Element 属性]]
##### [[lxml.etree._Element 方法]]
##### 示例
```python
from lxml import etree

# 要解析的HTML文本
html_text = """
<html>
    <head>
        <title>Example Page</title>
    </head>
    <body>
        <div class="content">
            <h1>Header 1</h1>
            <p>This is a paragraph.</p>
        </div>
    </body>
</html>
"""

# 解析HTML文本
tree = etree.HTML(html_text)

print(tree.tag)  # 标签名 html
print(tree.getchildren())  # 子节点 [head, body]

# 使用XPath选择元素
title = tree.find(".//title")  # 选择任意位置 title 节点
print("Title:", title.text)  # 字符串 Example Page

p = tree.find(".//p")  # 选择任意位置 title 节点
print("p:", p.text)  # 字符串 Example Page
```