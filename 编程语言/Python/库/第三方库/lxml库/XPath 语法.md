##### XPath 语法
```python
节点名
	# 选取根节点下的节点
/head
	# 选取根节点（绝对路径）
//body
	# 选取任意位置的节点
. 
	# 选取当前节点
.. 
	# 选取当前节点的父节点
@ 
	# 选取属性
[]
	# 条件选取节点
	# node[1] 第一个node节点
	# node[last()] 最后一个node节点
	# node[last()-1] 倒数第二个node节点
	# node[position()<3] 前两个node节点
	# node[@class] 带有class属性的node节点
	# node[@class="main"] class属性为main的node节点
	# node[price>30] price元素大于30的node节点
*
	# 任意节点
@*
	# 任意属性的节点
| 
	# 或
/text()
	# 节点文本
/comment()
	# 节点注释
```
##### XPath 函数
```python
string()  # str(.)，返回节点字符串 
contains()  # //div[contains(@id,‘in’)]，表示选择id中包含有’in’的div节点
starts-with()  # //div[starts-with(@id,‘in’)] ，表示选择以’in’开头的id属性的div节点
not()  # //input[not(@id)]，input节点不含用id属性
```
