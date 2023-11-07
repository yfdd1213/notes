##### [[lxml.etree._ElementTree 创建]]
##### [[lxml.etree._ElementTree 属性]]
##### [[lxml.etree._ElementTree 方法]]
##### 示例
```python
from lxml import etree

# 创建一个XML文档
xml_data = """
<root>
    <element1>Text 1</element1>
    <element2>Text 2</element2>
</root>
"""

# 解析XML数据并创建ElementTree对象
tree = etree.ElementTree(etree.fromstring(xml_data))

# 获取根元素
root = tree.getroot()
print("Root Element:", root.tag)

# 遍历并打印所有元素
for element in tree.iter():
    print("Element:", element.tag, "- Text:", element.text)

# 修改元素内容
for element in root:
    element.text = "Updated Text"

# 保存修改后的内容到文件
tree.write("updated.xml", pretty_print=True)

```