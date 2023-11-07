##### XML 可扩展标记语言（Extensible Markup Language）
- XML 被设计用来传输和存储数据，其焦点是数据的内容。
- HTML 被设计用来显示数据，其焦点是数据的外观。
- XML 标签没有被预定义。您需要自行定义标签。
- XML 被设计为具有自我描述性。
- [[XML 语法]]
```xml
<note>
	<to>Tove</to>
	<from>Jani</from>
	<heading>Reminder</heading>
	<body>Don't forget me this weekend!</body>
</note>
```
##### XPath
- XPath 是一门在 XML 文档中查找信息的语言。
- [[XPath 语法]]
```python
from lxml import etree

# 示例 XML 文档
xml_data = """
<root>
    <bookstore>
        <book>
            <title>Book 1</title>
            <author>Author 1</author>
            <price>29.99</price>
        </book>
        <book>
            <title>Book 2</title>
            <author>Author 2</author>
            <price>19.99</price>
        </book>
    </bookstore>
</root>
"""

# 解析 XML
root = etree.fromstring(xml_data)

# 使用 XPath 表达式选择和提取节点
books = root.xpath("//book")
for book in books:
    title = book.xpath("title/text()")[0]
    author = book.xpath("author/text()")[0]
    price = book.xpath("price/text()")[0]
    print("Title:", title)
    print("Author:", author)
    print("Price:", price)
    print("---")

```
