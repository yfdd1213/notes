##### lxml 基本使用
```python
from lxml import etree

# 创建一个XML文档
xml = """
<root>
    <element>Content</element>
    <sub_element>Sub Element Content</sub_element>
</root>
"""

# 解析XML文档
tree = etree.ElementTree(etree.fromstring(xml))
root = tree.getroot()

# 访问元素内容
element = root.find("element")
print("Element text:", element.text)

# 添加子元素
new_element = etree.SubElement(root, "new_element")
new_element.text = "New Element Content"

# 使用XPath选择元素
sub_element = root.xpath("/root/sub_element")[0]
print("Sub Element text:", sub_element.text)

# 修改属性
sub_element.set("attr", "value")

# 输出为字符串
serialized_xml = etree.tostring(root, pretty_print=True, encoding="utf-8")
print("Serialized XML:\n", serialized_xml.decode("utf-8"))

```
