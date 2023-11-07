##### `Color(red, green, blue, alpha)`
```python
from selenium.webdriver.support.color import Color

c = Color(255, 255, 255, 0.5)
```
##### Color 类方法
```python
Color.from_string(str_) → Color
	# 字符串转颜色类。
	# print(Color.from_string('#00ff33').rgba)
	# print(Color.from_string('rgb(1, 255, 3)').hex)
	# print(Color.from_string('blue').rgba)
```
##### Color 实例属性
```python
Color.hex
	# 该颜色的十六进制格式
Color.rgb
	# 该颜色的RGB格式
Color.rgba
	# 该颜色的RGBA格式
```