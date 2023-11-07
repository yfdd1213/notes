##### `Alert(driver)`
```python
# 构造方法
alert = Alert(driver)

# 激活弹出窗
driver.find_element(By.LINK_TEXT, "See an example alert").click()
# 等待弹出窗出现并切换到它
alert = wait.until(expected_conditions.alert_is_present())
# 确认警告框
alert.accept()
```
#####
```python
Alert.text
	# 窗口文本
```
##### Alert 实例方法
```python
Alert.accept() → None
	# 确认警告框。

Alert.dismiss() → None
	# 取消确认框。

Alert.send_keys(keysToSend: str) → None
	# 文本输入提示框。
```