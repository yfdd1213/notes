##### webdriver.edge 模块
- edge.options  模块
	- [[class selenium.webdriver.edge.options.Options]]  选项类
- edge.service  模块
	- [[class selenium.webdriver.edge.service.Service]]  服务类
- edge.webdriver  模块
	- [[class selenium.webdriver.edge.webdriver.WebDriver]]  驱动类
##### 示例
```python
from selenium.webdriver.edge.webdriver import WebDriver as Edge
from selenium.webdriver.edge.options import Options
from selenium.webdriver.edge.service import Service

# 浏览器选项类
options = Options()
options.page_load_strategy = 'normal'

# 驱动服务类
service = Service(executable_path="F:\msedgedriver.exe")  

# 创建驱动实例
driver = Edge(service=service, options=options)


# 主要操作......


# 关闭驱动
driver.close()
```