##### `WebDriverWait(driver, timeout, poll_frequency = 0.5, ignored_exceptions = None)`
- 显式等待是添加到代码中的循环，这些循环轮询应用程序，以便在应用程序退出循环并继续执行代码中的下一个命令之前将其计算为 true
```python
# Driver - WebDriver 或 WebElement 的实例
# timeout - 等待秒数
# poll_frequency - 轮询间隔，默认0.5秒
# ignored_exceptions - 在调用期间忽略的异常类的列表。默认只包含 NoSuchElementException

from selenium.webdriver.support.wait import WebDriverWait
wait = WebDriverWait(driver, timeout=2)  # 等2秒
```
##### WebDriverWait 实例方法
```python
until(method, message: str = '')
# 调用驱动程序提供的方法作为参数，直到返回值的计算结果为 True。
# Parameters:	
	# method – callable(WebDriver)
	# message – TimeoutException 的消息

until_not(method, message: str = '')
# 调用驱动程序提供的方法作为参数，直到返回值计算为 False。
# Parameters:	
	# method – callable(WebDriver)
	# message – optional message for TimeoutException
```
##### 示例
```python
revealed = driver.find_element(By.ID, "revealed")
wait = WebDriverWait(driver, timeout=2)  # 等2秒

driver.find_element(By.ID, "reveal").click()
wait.until(lambda d : revealed.is_displayed())  # 等待 revealed 显示

revealed.send_keys("Displayed")
```

