##### `Select(webelement)`
- 将元素转为下拉列表元素
```python
from selenium.webdriver.support.select import Select

element = driver.find_element(By.TAG_NAME, 'select')
select = Select(element)
```
##### Select 实例属性
```python
Select.options
	# 返回属于此选择标签的所有选项的列表
Select.all_selected_options
	# 返回属于此选择标记的所有已选选项的列表
Select.first_selected_option
	# 此选择标记中的第一个选择选项
```
##### Select 实例方法
```python
Select.select_by_value(value)
	# 选择具有与参数匹配的值的所有选项
Select.select_by_index(index)
	# 选择给定索引处的选项

Select.deselect_all()
	# 清除所有选定的条目
Select.deselect_by_index(index)
	# 取消选择给定索引处的选项
Select.deselect_by_value(value)
	# 取消选择值与参数匹配的所有选项
```