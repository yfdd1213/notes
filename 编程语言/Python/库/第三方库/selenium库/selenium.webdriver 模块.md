##### WebDriver 模块
- WebDriver 是 Selenium 库中的一个模块，提供了用于创建不同浏览器实例的类和方法
- WebDriver 以本地化方式驱动浏览器，就像用户在本地或使用 Selenium 服务器的远程机器上所做的那样，这标志着浏览器自动化的飞跃
- Selenium WebDriver 指的是语言绑定和各个浏览器控制代码的实现。 这通常被称为 WebDriver。
##### WebDriver 快捷API
- WebDriver 模块中有一些快捷API实质与各个子模块的API相同
```python
import selenium.webdriver
import selenium.webdriver.edge.webdriver

# 以 edge 为例，其他浏览器同理
selenium.webdriver.Edge == selenium.webdriver.edge.webdriver.WebDriver

selenium.webdriver.EdgeOptions == selenium.webdriver.edge.webdriver.Options

selenium.webdriver.EdgeService == selenium.webdriver.edge.webdriver.Service
```
-

