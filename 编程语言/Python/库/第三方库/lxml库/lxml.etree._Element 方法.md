##### lxml.etree._Element 方法
```python
_Element.addnext(self, element)
	# 将元素直接添加到此元素之后作为后续同级元素
_Element.addprevious(self, element)
	# 将元素作为前一个同级元素直接添加到此元素之前
_Element.append(self, element)
	# 将子元素添加到此元素的末尾
_Element.clear(self, keep_tail=False)
	# 重置元素。此函数删除所有子元素，清除所有属性，并将文本和尾部属性设置为None
_Element.cssselect(expr, *, translator)
	# 在此元素及其子元素上运行CSS表达式，返回结果列表
_Element.extend(self, elements)
	# 通过可迭代项中的元素扩展当前子项。
_Element.find(self, path, namespaces=None)
	# 按标记名称或路径查找第一个匹配的子元素。
_Element.findall(self, path, namespaces=None)
	# 按标记名称或路径查找所有匹配的子元素。
_Element.findtext(self, path, default=None, namespaces=None)
	# 按标记名称或路径查找第一个匹配子元素的文本。
_Element.get(self, key, default=None)  
	# 获取元素属性
_Element.getnext(self)
	# 返回此元素的以下同级或None。
_Element.getparent(self)
	# 返回此元素的父级，或为根元素返回None。
_Element.getprevious(self)
	# 返回此元素的前一个同级或None。
_Element.getroottree(self)
	# 返回包含此元素的文档的根节点的ElementTree。
_Element.index(self, child, start=None, stop=None)
	# 查找子对象在父对象中的位置。
_Element.insert(self, index, element)
	# 在此元素中的给定位置插入子元素
_Element.items(self)
	# 以序列的形式获取元素属性。属性以任意顺序返回。
_Element.iter(self, tag=None, *tags)
	# 从这个元素开始，按文档顺序（深度优先的预顺序）遍历子树中的所有元素。
_Element.iterancestors(self, tag=None, *tags)
	# 遍历此元素的祖先（从父元素到父元素）。
_Element.iterchildren(self, tag=None, *tags, reversed=False)
	# 遍历此元素的子元素。
_Element.iterdescendants(self, tag=None, *tags)
	# 按文档顺序遍历此元素的子元素。
_Element.iterfind(self, path, namespaces=None)
_Element.itersiblings(self, tag=None, *tags, preceding=False)
_Element.itertext(self, tag=None, *tags, with_tail=True)
_Element.keys(self)
	# 获取属性名称的列表。名称以任意顺序返回（就像普通Python字典一样）。
_Element.makeelement(self, _tag, attrib=None, nsmap=None, **_extra)
_Element.remove(self, element)
	# 删除匹配的子元素
_Element.replace(self, old_element, new_element)
	# 用作为第二个参数传递的元素替换子元素。
_Element.set(self, key, value)
	# 设置元素属性
_Element.values(self)
	# 以字符串序列的形式获取元素属性值。属性以任意顺序返回。
_Element.xpath(self, _path, namespaces=None, extensions=None, smart_strings=True, **_variables)
	# 使用元素作为上下文节点来计算xpath表达式。

```