##### 认识 beautiful soup 库
Beautiful Soup是一个用于解析HTML和XML文档的Python库，它提供了一种简单而灵活的方式来遍历和搜索文档的树状结构，从而方便地提取所需的信息。Beautiful Soup将复杂的文档转换为一个易于导航的树结构，使得从文档中提取数据变得更加容易。
Beautiful Soup将HTML文档转换成一个复杂的树形结构,每个节点都是Python对象,所有对象可以归纳为4种: `Tag` , `NavigableString` , `BeautifulSoup` , `Comment` .
以下是Beautiful Soup库的一些主要特点和用法：
1. **解析HTML/XML文档**: 通过将HTML或XML文档传递给Beautiful Soup构造函数，可以创建一个Beautiful Soup对象，该对象代表整个文档的树结构。
```python
from bs4 import BeautifulSoup
```
1. **遍历文档树**: Beautiful Soup提供了一些方法，如`.contents`、`.children`、`.descendants`等，可以让你遍历文档树的节点。
2. **搜索和过滤节点**: 使用方法如`.find()`、`.find_all()`、`.select()`等，你可以搜索文档中特定的标签或CSS选择器匹配的元素。
3. **提取数据**: 通过访问节点的属性和内容，你可以提取所需的数据。
4. **美化输出**: 使用`.prettify()`方法，你可以美化输出的文档结构，使其更易于阅读。
5. **修改文档**: 你可以修改文档树中的节点、内容和属性，然后将修改后的文档写回文件。
