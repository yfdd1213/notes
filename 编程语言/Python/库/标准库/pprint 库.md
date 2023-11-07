##### pprint 库
- 用于在输出数据时以易读的格式进行格式化。它主要用于输出复杂数据结构（如字典、列表、集合等）的内容，以便更清晰地查看和理解。使用 pprint.pprint() 快速调用
- [[class pprint.PrettyPrinter]] 美化打印类
```python
# pprint 高级接口
pprint.pprint(object, stream=None, indent=1, 
			  width=80, depth=None, *, compact=False, 
			  sort_dicts=True, underscore_numbers=False)
	# 后台构建 pprint.PrettyPrinter 类实例并打印 object
```
##### 示例
```python
import pprint
data = {
    'name': 'John',
    'age': 30,
    'city': 'New York',
    'skills': ['Python', 'JavaScript', 'SQL'],
    'projects': {
        'project1': 'Web App',
        'project2': 'Data Analysis',
        'project3': 'Machine Learning'
    }
}
pprint.pprint(data)

```