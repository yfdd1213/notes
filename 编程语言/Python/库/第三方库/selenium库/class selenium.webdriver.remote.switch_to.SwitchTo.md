##### `SwitchTo(driver)`
##### SwitchTo 实例属性
```python
SwitchTo.active_element
	# 获取当前活动的元素
SwitchTo.alert
	# 切换到弹出框
```
##### SwitchTo 实例方法
```python
SwitchTo.new_window(type_hint: Optional[str] = None) → None
	# 切换到新的“标签页”或“窗口”。
	# type_hint = “tab” or “window”

SwitchTo.window(window_name: str) → None
	# 将焦点切换到指定的窗口。

SwitchTo.default_content() → None
	# 将焦点切换到默认框架。

SwitchTo.frame(frame_reference: Union[str, int, selenium.webdriver.remote.webelement.WebElement]) → None
	# 通过索引、名称或网元将焦点切换到指定的框架。

SwitchTo.parent_frame() → None
	# 将焦点切换到父上下文。如果当前上下文是顶级浏览上下文，则上下文保持不变。
```
