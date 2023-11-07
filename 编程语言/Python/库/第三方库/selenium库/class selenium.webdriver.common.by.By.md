##### By 类属性
- 支持的定位器策略集
```python
By.ID = "id"
	# 定位 id 属性与搜索值匹配的元素
By.XPATH = "xpath"
    # 定位与 XPath 表达式匹配的元素
By.LINK_TEXT = "link text"
    # 定位link text可视文本与搜索值完全匹配的锚元素
By.PARTIAL_LINK_TEXT = "partial link text"
    # 定位link text可视文本部分与搜索值部分匹配的锚点元素。如果匹配多个元素，则只选择第一个元素。
By.NAME = "name"
    # 定位 name 属性与搜索值匹配的元素
By.TAG_NAME = "tag name"
    # 定位标签名称与搜索值匹配的元素
By.CLASS_NAME = "class name" 
    # 定位class属性与搜索值匹配的元素（不允许使用复合类名）
By.CSS_SELECTOR = "css selector"
    # 定位 CSS 选择器匹配的元素
```
##### 示例
```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://www.example.com")

    # 标签名称 'div'
element = driver.find_element(By.TAG_NAME, 'div')

    # 标签名称 'p'
elements = element.find_elements(By.TAG_NAME, 'p')
for e in elements:
    print(e.text)
```