- [[函数及方法类型]]
```python
# 函数定义形式
'''
def 函数名(0个或多个形参):
	"""
	函数注释，可用help查询
	"""
	函数体
	return 返回值

函数名(实参)
'''

# 简单的函数
def hi(name):
    """
    对某人打招呼
    :param name: 打招呼的对象
    :return: None
    """
    print(f'hi {name}')

hi('jack')
help(hi)

```