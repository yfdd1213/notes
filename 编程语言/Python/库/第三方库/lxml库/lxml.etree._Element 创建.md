##### lxml.etree._Element 创建
```python
etree.Element(_tag, attrib=None, nsmap=None, **_extra)
	# 元素工厂。创建一个具有指定标签名和属性的 XML 元素

etree.fromstring(text, parser=None, base_url=None)
	# 从字符串分析XML文档或片段。返回根节点（或分析器目标返回的结果）
	
etree.XML(text, parser=None, base_url=None)
	# 从字符串分析XML文档或片段。返回根节点（或分析器目标返回的结果）
	
etree.HTML(text, parser=None, base_url=None)
	# 从字符串分析HTML文档。返回根节点（或分析器目标返回的结果）

```