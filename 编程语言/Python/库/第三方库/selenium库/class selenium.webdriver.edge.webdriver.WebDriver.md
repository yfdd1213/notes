##### `WebDriver(options=None, service=None, keep_alive=True)`
- 继承自 class selenium.webdriver.chromium.webdriver.ChromiumDriver
```python
# Options-这是 EdgeOptions 的一个实例
# Service-如果需要传递额外的详细信息，用于处理浏览器驱动程序的服务对象
# keep_alive-是否将 EdgeRemoteConnection 配置为使用 HTTP keep-alive。

from selenium.webdriver.edge.webdriver import WebDriver as Edge
driver = Edge()
```
##### WebDriver 实例属性
```python
WebDriver.current_url
	# 获取当前页的 URL。
WebDriver.title
	# 返回当前页的标题。
WebDriver.page_source
	# 获取当前页面的源代码
WebDriver.window_handles
	# 返回当前会话中所有窗口的句柄
WebDriver.current_window_handle
	# 返回当前窗口的句柄
```
##### WebDriver 实例方法
- 浏览器导航
```python
WebDriver.get(url: str) → None
	# 在当前浏览器会话中加载网页
WebDriver.back()
	# 按下浏览器的后退按钮
WebDriver.forward()
	# 按下浏览器的前进键
WebDriver.refresh()
	# 刷新当前页面
WebDriver.close()
	# 关闭标签页或窗口
WebDriver.quit()
	# 在会话结束时退出浏览器 
WebDriver.implicitly_wait(time_to_wait: float) → None
	# 隐式等待，如果设置了隐式等待，则驱动程序将等待所提供值的持续时间，然后返回错误。其中一旦找到元素，驱动程序将返回元素引用，代码将继续执行
```
- 查找元素
```python
WebDriver.find_element(By, value=None) → WebElement
	# 查找给定 By 策略和定位器的元素
WebDriver.find_elements(By, value=None) → List[WebElement]
	# 查找给定 By 策略和定位器的元素
```
- [[class selenium.webdriver.remote.switch_to.SwitchTo|切换内容]]
```python
WebDriver.switch_to  
	# 切换焦点系列方法
		element = WebDriver.switch_to.active_element
		alert = WebDriver.switch_to.alert
		WebDriver.switch_to.default_content()
		WebDriver.switch_to.frame('frame_name')
		WebDriver.switch_to.frame(1)
		WebDriver.switch_to.frame(WebDriver.find_elements_by_tag_name("iframe")[0])
		WebDriver.switch_to.parent_frame()
		WebDriver.switch_to.window('main')
```
- Cookies
```python
WebDriver.add_cookie(cookie_dict) → None
	# 将 cookie 添加到当前会话。
WebDriver.get_cookie(name) → Optional[Dict]
	# 按名称获取一个 Cookie。如果找到，返回 Cookie，如果没有，则不返回。
WebDriver.get_cookies() → List[dict]
	# 获取全部 Cookies 
WebDriver.delete_cookie(name) → None
	# 删除 Cookie 
WebDriver.delete_all_cookies() → None
	# 删除所有 Cookies 
```
- 窗口管理
```python
WebDriver.get_window_size() → dict[source]
	# 获取当前窗口的宽度和高度。
WebDriver.set_window_size(width, height)
	# 设置当前窗口的宽度和高度
WebDriver.get_window_position() → dict
	# 获取当前窗口的 x, y 位置。
WebDriver.set_window_position(x, y)
	# 设置当前窗口的 x, y 位置。
WebDriver.maximize_window()
	# 最大化窗口 
WebDriver.minimize_window()
	# 最小化窗口 
WebDriver.fullscreen_window()
	# 全屏窗口 
WebDriver.save_screenshot(filename)
	# 屏幕截图 
WebDriver.print_page(print_options)
	# 获取当前页面的 PDF。

```
- 执行
```python
WebDriver.execute(driver_command: str, params: dict = None) → dict
	# command.CommandExecutor 命令
WebDriver.execute_script(script, *args)
	# 在当前窗口/框架中同步执行 JavaScript
WebDriver.execute_async_script(script: str, *args)
	# 在当前窗口/框架中异步执行 JavaScript
WebDriver.execute_cdp_cmd(cmd: str, cmd_args: dict)
	# 执行 Chrome Devtools 协议命令
```

