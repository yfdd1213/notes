- is 是 Python 中用于比较两个对象身份（identity）的运算符。它用于检查两个对象是否引用同一个内存地址，也就是说，它们是否是同一个对象
- is 运算符与 == 运算符有所不同。== 运算符用于比较两个对象的值是否相等，而 is 运算符用于比较两个对象是否是同一个对象，即它们是否引用相同的内存地址
```python
# 创建两个相同内容的列表
list1 = [1, 2, 3]
list2 = [1, 2, 3]

# 检查 list1 和 list2 是否是同一个对象
print(list1 is list2)  # 输出: False

# 为 list2 赋值 list1 的引用
list2 = list1

# 再次检查 list1 和 list2 是否是同一个对象
print(list1 is list2)  # 输出: True
```