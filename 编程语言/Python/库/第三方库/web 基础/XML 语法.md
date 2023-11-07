##### XML 语法
- XML 元素指的是从开始标签直到结束标签的部分
- XML 标签对大小写敏感
- XML 必须正确嵌套
- XML 属性, XML元素具有属性, 类似 HTML, XML 属性必须加引号
- XML 文档形成一种树结构
- XML 文档必须有根元素
- XML 声明, 如果存在需要放在文档的第一行
- 在 XML 中，一些字符拥有特殊的意义。如果您把字符 "<" 放在 XML 元素中，会发生错误，这是因为解析器会把它当作新元素的开始。
```xml
<?xml version="1.0" encoding="UTF-8"?>  # 声明
<!-- This is a comment -->  # 注释
<bookstore>
    <book category="COOKING">  # 属性值
        <title lang="en">Everyday Italian</title>
        <author>Giada De Laurentiis</author>
        <year>2005</year>
        <price>30.00</price>
    </book>
    <book category="CHILDREN">
        <title lang="en">Harry Potter</title>
        <author>J K. Rowling</author>
        <year>2005</year>
        <price>29.99</price>
    </book>
    <book category="WEB">
        <title lang="en">Learning XML</title>
        <author>Erik T. Ray</author>
        <year>2003</year>
        <price>39.95</price>
    </book>
</bookstore>


# 根元素 
# <bookstore>...</bookstore>
# 子元素 
#   <book>...</book>
# 叶子元素
#     <title>...</title>
#     <author>...</author>
#     <year>...</year>
#     <price>...</price>
```





