##### lxml.etree._ElementTree 方法

```python
_ElementTree.xpath(self, _path, namespaces=None, extensions=None, smart_strings=True, **_variables)
	# 执行XPath查询，返回满足条件的元素列表。
_ElementTree.find(self, path, namespaces=None)
	# 通过标签名或路径查找第一个匹配的子元素。
_ElementTree.findall(self, path, namespaces=None)
	# 通过标签名或路径查找所有匹配的子元素。
_ElementTree.findtext(self, path, default=None, namespaces=None)
	# 通过标签名或路径查找第一个匹配的子元素的文本。
_ElementTree.getelementpath(self, element)
	# 返回结构化的绝对 ElementPath 表达式以查找元素
_ElementTree.getpath(self, element)
	# 返回结构化的绝对 XPath 表达式以查找元素。
_ElementTree.getroot(self)
	# 获取此树的根元素。
_ElementTree.iter(self, tag=None, *tags)
	# 生成器函数，返回给定标签名的所有元素。如果不传递标签名，则返回树中的所有元素。
_ElementTree.iterfind(self, path, namespaces=None)
	# 生成器函数，根据指定的XPath路径查找匹配的元素。
_ElementTree.parse(self, source, parser=None, base_url=None)
	# 从源（文件名、文件对象、URL等）解析XML数据，返回一个 ElementTree 对象。
_ElementTree.relaxng(self, relaxng)
	# 使用给定的 RelaxNG 模式验证 XML 数据。
_ElementTree.write(file, *, encoding, method, pretty_print, xml_declaration, with_tail, standalone, doctype, compression, exclusive, inclusive_ns_prefixes, with_comments, strip_text, docstring)
	# 将 ElementTree 的内容写入文件对象 file。
_ElementTree.pretty_print=False, xml_declaration=None, with_tail=True, standalone=None, doctype=None, compression=0, exclusive=False, inclusive_ns_prefixes=None, with_comments=True, strip_text=False)
	# 输出格式


_ElementTree.write_c14n(file, *, exclusive, with_comments, compression, inclusive_ns_prefixes)
_ElementTree.write_c14n(self, file, exclusive=False, with_comments=True,
compression=0, inclusive_ns_prefixes=None)
_ElementTree.xinclude(self)
_ElementTree.xmlschema(self, xmlschema)
_ElementTree.xslt(self, _xslt, extensions=None, access_control=None, **_kw)

```