##### etree 函数
```python
etree.strip_attributes(tree_or_element, *attribute_names)
	# 从给定的 ElementTree 或 Element 对象中删除指定的属性

etree.strip_elements(tree_or_element, *tag_names, with_tail=True)
	# 从给定的 ElementTree 或 Element 对象中删除指定的元素

etree.strip_tags(tree_or_element, *tag_names)
	# 从给定的 ElementTree 或 Element 对象中删除指定的标签，同时保留标签内的文本内容

etree.tostring(element_or_tree, *, encoding=None, method='xml', xml_declaration=None, pretty_print=False, with_tail=True, standalone=None, doctype=None, exclusive=False, inclusive_ns_prefixes=None, with_comments=True, strip_text=False)
	# 将给定的 Element 或 ElementTree 对象转换为字符串形式
	# xml_string = etree.tostring(element, encoding="utf-8", pretty_print=True)

```

