##### WebElement 实例属性
```python
WebElement.id
	# selenium 使用的内部 ID，用于判断相等
WebElement.text
	# 元素的文本
WebElement.tag_name
	# 标签名
WebElement.rect
	# 包含元素大小和位置的字典
WebElement.size
	# 元素的大小
WebElement.location
	# 元素在可呈现画布中的位置。
```
##### WebElement 实例方法
```python
WebElement.clear() → None
	# 如果它是文本输入元素，则清除文本
WebElement.click() → None
	# 单击元素
WebElement.send_keys(*value) → None
	# 模拟输入元素，字符串或本地文件路径
WebElement.submit()
	# 提交表单
WebElement.get_attribute(name) → str
	# 获取元素的给定属性或属性

WebElement.is_displayed()
	# 元素是否对用户可见。
WebElement.is_enabled()
	# 元素是否启用。
WebElement.is_selected()
	# 元素是否被选中。

WebElement.value_of_css_property(property_name) → str
	# CSS 属性的值。
WebElement.get_attribute(name) → str | None
	# 获取元素的给定属性或属性。

WebElement.screenshot(filename) → bool
	# 将当前元素的屏幕快照保存到 PNG 图像文件中

WebElement.find_element(By, value=None) → WebElement
	# 查找给定 By 策略和定位器的元素
WebElement.find_elements(By, value=None) → List[WebElement]
	# 查找给定 By 策略和定位器的元素
```