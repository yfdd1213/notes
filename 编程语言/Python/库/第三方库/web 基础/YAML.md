##### YAML
- YAML 是 "YAML Ain't a Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。
- YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、各种配置文件、倾印调试内容、文件大纲（例如：许多电子邮件标题格式和YAML非常接近）。
- YAML 的配置文件后缀为 .yml
	- 大小写敏感
	- 使用缩进表示层级关系
	- 缩进不允许使用tab，只允许空格
	- 缩进的空格数不重要，只要相同层级的元素左对齐即可
	- `#` 表示注释
```python
# 标量
name: sam
age:18

name: 
  sam
age:
  18

# 字典
account: { name: sam, age: 18 }

account: 
  name: sam
  age: 18 

# 列表
course: [ linux, golang, python ]

course: 
   - linux
   - golang
   - python 

# YAML 表示个人信息
name: John
age: 30
is_student: false
favorite_fruits:
  - apple
  - banana
  - orange
address:
  street: 123 Main St
  city: Example City
  zip: "12345"
```
