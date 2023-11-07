##### `Options()`
- 继承自 class selenium.webdriver.chromium.webdriver.ChromiumOptions
```python
from selenium.webdriver.edge.options import Options

options = Options()
```
##### Options 实例属性
```python
Options.arguments
	# 浏览器所需的参数列表

Options.extensions
	# 将要加载的编码扩展名列表
```
##### Options 实例方法
```python
Options.add_argument()
	# 向列表中添加参数
	# Options.add_argument("--headless")  # 无头模式
	# Options.add_argument("--proxy-server=http://proxy.example.com:8080")  # 代理

Options.add_extension()
	# 将扩展的路径添加到一个将用于将其提取到 ChromeDriver 的列表中。

Options.add_experimental_option()
	# 添加一个传递给 chromium 的实验选项。
```