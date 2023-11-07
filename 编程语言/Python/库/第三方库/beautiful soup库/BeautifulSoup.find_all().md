##### `BeautifulSoup.find_all(name, attrs, recursive, string, limit, **kwargs)`
**功能用途:**
- `find_all()` 函数用于在文档中搜索所有匹配指定条件的标签，并返回一个包含所有匹配标签的列表。它允许你通过标签名称、属性、内容等不同方式来搜索，以找到所有符合条件的元素。

**参数说明:**
- `name`: 过滤器，有字符串、列表、True、正则表达式。
- `attrs`: 一个字典，包含要匹配的属性名和属性值。例如，`attrs={'class': 'header'}` 表示搜索具有 `class` 属性值为 `'header'` 的标签。
- `recursive`: 布尔值，表示是否递归搜索子节点。默认为 `True`。
- `string`: 指定要搜索的文本内容。例如，`string='example'` 表示搜索包含文本内容 `'example'` 的标签。
- `limit`: 限制返回的匹配标签数量。默认为 `None`，即返回所有匹配标签。
- `**kwargs`: 支持通过关键字参数传递任何其他属性筛选条件。如果包含一个名字为 `id` 的参数,Beautiful Soup会搜索每个tag的 `id` 属性.

**返回值:** 
- `find_all()` 函数返回一个包含所有匹配标签的列表。

**示例:**
- 假设有以下 HTML 文档：
```html
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
```
- 以下是 `find_all()` 函数的示例使用：
```python
from bs4 import BeautifulSoup

# 创建 Beautiful Soup 对象
html_doc = "..."  # 上述 HTML 文档
soup = BeautifulSoup(html_doc, 'html.parser')

# 示例 1: 搜索所有 <li> 标签
li_tags = soup.find_all('li')
for li_tag in li_tags:
    print("Content of <li>:", li_tag.text)

# 示例 2: 搜索具有 class="content" 的所有 <div> 标签
div_tags = soup.find_all('div', attrs={'class': 'content'})
for div_tag in div_tags:
    print("Content of <div>:", div_tag.text)

# 示例 3: 搜索包含文本内容 "Item" 的前两个 <li> 标签
li_tags = soup.find_all('li', string='Item', limit=2)
for li_tag in li_tags:
    print("Content of <li>:", li_tag.text)
```