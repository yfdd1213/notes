##### selenium.common.exceptions 模块
- 异常类
```python
WebDriverException(msg, screen, stacktrace)	
	# webdriver 异常基类
SessionNotCreatedException(msg, screen, …)	
	# 无法创建新会话。
StaleElementReferenceException(msg, screen, …)	
	# 当对元素的引用现在“过时”时抛出。
TimeoutException(msg, screen, stacktrace)
	# 当命令未在足够的时间内完成时引发。
UnableToSetCookieException(msg, screen, …)
	# 当驱动程序无法设置 cookie 时引发。
UnexpectedAlertPresentException(msg, screen, …)
	# 出现意外警报时引发。
UnexpectedTagNameException(msg, screen, …)
	# 当支持类未获得预期的 Web 元素时引发。
UnknownMethodException(msg, screen, stacktrace)
	# 请求的命令与已知 URL 匹配，但与该 URL 的任何方法都不匹配。
ElementClickInterceptedException(msg, …)
	# 无法完成“元素单击”命令，因为接收事件的元素遮挡了请求单击的元素。
ElementNotInteractableException(msg, screen, …)
	# 当一个元素出现在 DOM 中，但是与该元素的交互会由于绘制顺序而碰到另一个元素时引发。
ElementNotSelectableException(msg, screen, …)
	# 尝试选择不可选择的元素时抛出。
ElementNotVisibleException(msg, screen, …)
	# 当元素存在于 DOM 上，但它不可见，因此无法与之交互时引发。
ImeActivationFailedException(msg, screen, …)
	# 激活 IME 引擎失败时引发。
ImeNotAvailableException(msg, screen, stacktrace)	
	# 在 IME 支持不可用时引发。
InsecureCertificateException(msg, screen, …)  
	# 导航导致用户代理命中证书警告，这通常是 TLS 证书过期或无效的结果。
InvalidArgumentException(msg, screen, stacktrace)	 
	# 传递给命令的参数无效或格式不正确。
InvalidCookieDomainException(msg, screen, …)	
	# 尝试在与当前 URL 不同的域下添加 Cookie 时引发。
InvalidCoordinatesException(msg, screen, …)	
	# 提供给交互操作的坐标无效。
InvalidElementStateException(msg, screen, …)	
	# 当由于元素处于无效状态而无法完成命令时引发。
InvalidSelectorException(msg, screen, stacktrace)	
	# 当用于查找元素的选择器不返回 Web元素时抛出。
InvalidSessionIdException(msg, screen, …)	
	# 如果给定的会话 ID 不在活动会话列表中，则发生，这意味着会话不存在或未处于活动状态。
InvalidSwitchToTargetException(msg, screen, …)	
	# 当要切换的框架或窗口目标不存在时引发。
JavascriptException(msg, screen, stacktrace)	
	# 执行用户提供的 JavaScript 时出错。
MoveTargetOutOfBoundsException(msg, screen, …)	
	# 当提供给 ActionsChains move（） 方法的目标无效时抛出
NoAlertPresentException(msg, screen, stacktrace)	
	# 切换到无显示警报时引发。
NoSuchAttributeException(msg, screen, stacktrace)  
	# 找不到元素的属性时抛出。
NoSuchCookieException(msg, screen, stacktrace)	
	# 在当前浏览上下文的活动文档的相关 Cookie 中找不到与给定路径名匹配的 Cookie。
NoSuchElementException(msg, screen, stacktrace)	
	# 找不到元素时抛出。
NoSuchFrameException(msg, screen, stacktrace)	
	# 当要切换的框架目标不存在时引发。
NoSuchShadowRootException(msg, screen, …)  
	# 尝试访问元素的影子根时未附加影子根时抛出。
NoSuchWindowException(msg, screen, stacktrace)	
	# 当要切换的窗口目标不存在时引发。
ScreenshotException(msg, screen, stacktrace)	
	# 屏幕捕获变得不可能。
```