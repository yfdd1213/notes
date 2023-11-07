##### Tag 创建对象
- HTML 标签
```python
# 通过 HTML 标签名, 返回文档树中标签的第一个实例
soup = BeautifulSoup('<b class="boldest">加粗内容</b>')
soup.b  # b 标签，标签定义粗体的文本
soup = BeautifulSoup('<p class="body">一个段落</p>')
soup.p  # p 标签，标签定义一个段落
soup = BeautifulSoup('<h1 class="body">一级标题</h1>')
soup.h1  # h1 标签，标签定义一级标题
soup = BeautifulSoup('<a class="body">一个超链接</a>')
soup.a  # a 标签，标签定义一个超链接
...
```
##### Tag 实例属性
- 一个Tag可能包含多个字符串或其它的Tag,这些都是这个Tag的子节点.Beautiful Soup提供了许多操作和遍历子节点的属性.
```python
Tag.name  # 标签名
Tag.attrs  # 标签属性
Tag.['attrs']  # 标签属性 tag.get('attr')
Tag.string  # 标签修饰的字符串或者注释
Tag.strings  # 循环获取多个字符串
Tag.stripped_strings  # 去除多余空白内容

Tag.contents  # 子节点的列表
Tag.children  # 子节点的迭代器
Tag.descendants  # 子孙节点的生成器

Tag.parent  # 父节点
Tag.parents  # 先辈节点的生成器

Tag.next_sibling  # 下一个平行节点标签
Tag.previous_sibling  # 上一个平行节点标签
Tag.next_siblings  # 生成器，所有后序节点
Tag.previous_siblings  # 生成器，所有前序节点
```
##### Tag 实例方法
```python
Tag.find_all( name , attrs , recursive , string , **kwargs )  # 当前节点的所有子节点
Tag.find( name , attrs , recursive , string , **kwargs )
  # 当前节点的子节点
  
Tag.find_parents( name , attrs , recursive , string , **kwargs )  # 搜索当前节点的父节点
Tag.find_parent( name , attrs , recursive , string , **kwargs )  # 搜索当前节点的父节点

Tag.find_next_siblings( name , attrs , recursive , string , **kwargs )  # 搜索当前节点后面的兄弟节点
Tag.find_next_sibling( name , attrs , recursive , string , **kwargs )  # 搜索当前节点后面的兄弟节点

Tag.find_previous_siblings( name , attrs , recursive , string , **kwargs )  # 前面的兄弟节点
Tag.find_previous_sibling( name , attrs , recursive , string , **kwargs )  # 前面的兄弟节点

Tag.select()  # CSS选择器
```
##### 示例
```python
from bs4 import BeautifulSoup

# 示例 HTML 文档
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

# 创建 Beautiful Soup 对象
soup = BeautifulSoup(html_doc, 'html.parser')

# 提取 <h1> 标签
h1_tag = soup.h1

# 访问标签的内容
h1_content = h1_tag.text
print("Content of <h1>:", h1_content)

# 访问标签的属性
div_tag = soup.div
div_class = div_tag['class']
print("Class of <div>:", div_class)

# 遍历子节点
ul_tag = soup.ul
for li in ul_tag.find_all('li'):
    print("List Item:", li.text)

# 修改标签的内容
p_tag = soup.p
p_tag.string = "New paragraph content"

# 修改标签的属性
h1_tag['class'] = 'header-class'

# 输出修改后的文档
print(soup.prettify())

```