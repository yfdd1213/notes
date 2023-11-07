##### `ActionChains(driver, duration, devices)`
- ActionChain 是一种自动化低级交互的方法，例如鼠标移动、鼠标按钮操作、按键和上下文菜单交互。
```python
from selenium.webdriver.common.action_chains import ActionChains

ac = ActionChains(driver)
```
##### ActionChains 实例方法
- 链式调用
```python
ActionChains.perform()
	# 执行所有存储操作。
	# ac.move_to_element(clickable).pause(1).click_and_hold().pause(1).send_keys("abc").perform()
ActionChains.pause(seconds) 
	# 以秒为单位暂停指定持续时间内的所有输入。
```
- 键盘
```python
ActionChains.key_down(value, element)
	# 在元素element上发送一个按键value，不释放它
ActionChains.key_up(value, element)
	# 在元素element上释放按键value
ActionChains.send_keys(*keys_to_send)
	# 向当前聚焦元素发送键。
ActionChains.send_keys_to_element(element, *keys_to_send)
	# 向元素发送键。
```
- 鼠标
```python
ActionChains.click(on_element=None)
	# 点击元素。如果没有，点击当前鼠标位置
ActionChains.click_and_hold(on_element=None)
	# 在元素上按住鼠标左键
ActionChains.context_click(on_element=None)
	# 右键单击
ActionChains.double_click(on_element=None)
	# 双击一个元素
	
ActionChains.move_to_element(on_element=None)
	# 将鼠标移动到元素的中间。
ActionChains.move_to_element_with_offset(to_element,xoffset,yoffset)
	# 将鼠标移动到元素的视图中心点，然后按提供的偏移量移动。
ActionChains.move_by_offset(xoffset, yoffset)
	# 将鼠标移动到相对于当前鼠标位置的偏移位置。

ActionChains.drag_and_drop(source, target)
	# 在source元素上按住鼠标左键，拖到target元素上并释放
ActionChains.drag_and_drop_by_offset(source, xoffset, yoffset)
	# 在source元素上按住鼠标左键，拖动x，y距离并释放
```
- 滚轮
```python
scroll_to_element(element)
	# 如果元素位于视点之外，则将元素的底部滚动到视点的底部。

scroll_by_amount(delta_x, delta_y)
	# 按给定幅度滚动，正值向右和向下滚动。负值表示向左和向上

scroll_from_origin(scroll_origin, delta_x, delta_y) 
	# 根据提供的原点按提供的数量滚动。
	# 滚动原点可以是元素的中心，也可以是视口的左上角加上任何偏移量。
	# 如果原点是一个元素，而该元素不在视点中，那么元素的底部将首先滚动到视点的底部。
```