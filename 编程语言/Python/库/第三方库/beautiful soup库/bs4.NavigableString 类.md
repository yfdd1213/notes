##### NavigableString 创建对象
- 标签修饰的字符串
```python
# 通过 BeautifulSoup.tag.string 
soup = BeautifulSoup('<b class="boldest">加粗内容</b>')
soup.b.string  # '加粗内容'

soup = BeautifulSoup('<p class="body">一个段落</p>')
soup.p.string  # '一个段落'

soup = BeautifulSoup('<h1 class="body">一级标题</h1>')
soup.h1.string  # '一级标题'

soup = BeautifulSoup('<a class="body">一个超链接</a>')
soup.a.string  # a '一个超链接'
...
```