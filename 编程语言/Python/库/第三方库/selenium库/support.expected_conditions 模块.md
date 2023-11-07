##### selenium.webdriver.support.expected_conditions 模块
- 用于显式等待的期望条件函数
```python
# locator：元素的定位信息 (by, path)

all_of(*expected_conditions)	
	# 期望所有多个预期条件都为真。
any_of(*expected_conditions)	
	# 多个预期条件中的任何一个为真的预期。
none_of(*expected_conditions)	
	# 用于检查指定的多个预期条件中是否没有任何一个条件被满足。

alert_is_present()	
	# 等待页面上是否存在弹出框并切换到它。
title_is(title)	
	# 等待页面标题与给定标题完全相符。

element_attribute_to_include(locator, str], …)
	# 等待元素的属性中包含指定的值。
element_located_selection_state_to_be(…)
	# 等待元素的选中状态与给定状态相匹配。
element_located_to_be_selected(locator, str])	
	# 等待元素被选中。
element_selection_state_to_be(element, …)
	# 等待指定元素的选中状态与给定状态相匹配。
element_to_be_clickable(mark, Tuple[str, str]])	
	# 等待元素可点击，也就是等待元素在页面上可见且启用。
element_to_be_selected(element)
	# 等待元素被选中。
frame_to_be_available_and_switch_to_it(…)	
	# 等待框架（frame）可用并切换到它。
invisibility_of_element(element, Tuple[str, …])
	# 等待元素不可见。
invisibility_of_element_located(locator, …)	
	# 等待指定位置的元素不可见。
new_window_is_opened(current_handles)	
	# 等待新窗口打开并切换到新窗口。

number_of_windows_to_be(num_windows)	
	# 等待打开的窗口数量达到指定数量。
presence_of_all_elements_located(locator, str])	
	# 等待所有满足条件的元素出现。
presence_of_element_located(locator, str])	
	# 用于等待元素出现在页面上。也就是等待元素在DOM中出现
staleness_of(element)	
	# 等待元素过时（即不再存在）。

text_to_be_present_in_element(locator, str], …)	
	# 等待指定元素的文本包含指定文本。
text_to_be_present_in_element_attribute(…)	
	# 等待指定元素的属性包含指定文本。
text_to_be_present_in_element_value(locator, …)	
	# 等待指定元素的值包含指定文本。
title_contains(title)	
	# 等待页面标题包含指定的文本。

url_changes(url)	
	# 等待页面的 URL 发生变化。
url_contains(url)	
	# 等待页面的 URL 包含指定的部分。
url_matches(pattern)	
	# 等待页面的 URL 符合指定的正则表达式模式。
url_to_be(url)	
	# 等待页面的 URL 与给定的 URL 完全相符。

visibility_of(element)	
	# 等待元素在页面上可见。
visibility_of_all_elements_located(locator, str])	
	# 等待所有满足条件的元素在页面上可见。
visibility_of_any_elements_located(locator, str])	
	# 等待至少一个满足条件的元素在页面上可见。
visibility_of_element_located(locator, str])	
	# 用于等待元素在页面上可见。也就是等待元素在DOM中出现且可见。
```