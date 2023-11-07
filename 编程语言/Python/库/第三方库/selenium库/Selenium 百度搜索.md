##### Selenium 百度搜索
```python
from selenium import webdriver  
from selenium.webdriver.edge.service import Service  

# 驱动路径
service = Service(executable_path="F:\msedgedriver.exe")  

# 创建驱动实例
driver = webdriver.Edge(service=service)

# 执行操作
driver.get('https://www.baidu.com')  

# 请求浏览器信息 
title = driver.title

# 建立等待策略
driver.implicitly_wait(0.5)

# 发送命令查找元素
search_box = driver.find_element(By.ID, value='kw')  
search_button = driver.find_element(By.ID, value='su')

# 操作元素
search_box.send_keys('python')  
search_button.click()

# 获取元素信息
value = search_box.get_attribute("value")

# 结束会话
driver.quit()

```