##### 搜索API过滤器
- 在Beautiful Soup库中，可以使用API过滤器来定义搜索条件，以便在文档中查找和提取特定的标签。这些过滤器允许你根据标签的名称、属性、内容等来搜索和筛选标签。以下是一些常用的API过滤器：
- **字符串**
	- 最简单的过滤器是字符串.在搜索方法中传入一个字符串参数,Beautiful Soup会查找与字符串完整匹配的内容,下面的例子用于查找文档中所有的`<b>`标签:
```python
soup.find_all('b')
# [<b>The Dormouse's story</b>]
```
- **正则表达式**
	- 如果传入正则表达式作为参数,Beautiful Soup会通过正则表达式的 match() 来匹配内容.下面例子中找出所有以b开头的标签,这表示`<body>`和`<b>`标签都应该被找到:
```python
import re
for tag in soup.find_all(re.compile("^b")):
    print(tag.name)
# body
# b

# 下面代码找出所有名字中包含”t”的标签:
for tag in soup.find_all(re.compile("t")):
    print(tag.name)
# html
# title
```
- **列表**
	- 如果传入列表参数,Beautiful Soup会将与列表中任一元素匹配的内容返回.下面代码找到文档中所有`<a>`标签和`<b>`标签:
```python
soup.find_all(["a", "b"])
# [<b>The Dormouse's story</b>,
#  <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
#  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
#  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
```
- **True**
	- True 可以匹配任何值,下面代码查找到所有的tag,但是不会返回字符串节点
```python
for tag in soup.find_all(True):
    print(tag.name)
# html
# head
# title
# body
# p
# b
# p
# a
# a
# a
# p
```
- **方法**
	- 如果没有合适过滤器,那么还可以定义一个方法,方法只接受一个元素参数, 如果这个方法返回 True 表示当前元素匹配并且被找到,如果不是则反回 False
```python
def has_class_but_no_id(tag):
    return tag.has_attr('class') and not tag.has_attr('id')

soup.find_all(has_class_but_no_id)
# [<p class="title"><b>The Dormouse's story</b></p>,
#  <p class="story">Once upon a time there were...</p>,
#  <p class="story">...</p>]
```

