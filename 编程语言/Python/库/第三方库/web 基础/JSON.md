##### JSON（JavaScript Object Notation）
- JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）
- JSON 是轻量级的文本数据交换格式
- JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。
- JSON 具有自我描述性，更易理解
- 数据在`名称/值`对中
- 数据由逗号 `,` 分隔
- 使用斜杆 `\` 来转义字符
- 大括号 `{}` 保存对象
- 中括号 `[]` 保存数组，数组可以包含多个对象
- JSON 值可以是：
	- 数字（整数或浮点数）
	- 字符串（在双引号中）
	- 逻辑值（true 或 false）
	- 数组（在中括号中）
	- 对象（在大括号中）
	- null
```json
{
    "name": "John",
    "age": 30,
    "isStudent": false,
    "address": {
        "street": "123 Main St",
        "city": "New York"
    },
    "hobbies": ["reading", "music", "swimming"]
}
```
##### jsonpath
- JSONPath 是一种用于在 JSON 数据中定位和提取信息的查询语言，类似于 XML 中的 XPath。它允许你通过使用路径表达式来指定要选择的数据。JSONPath 在处理 JSON 数据时非常有用，特别是在需要从复杂的嵌套结构中提取特定数据时。
```python
from jsonpath import jsonpath

# 示例 JSON 数据
json_data = {
    "name": "John",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "New York"
    },
    "hobbies": ["reading", "music", "swimming"]
}

# 使用 JSONPath 查询选择数据
name = jsonpath(json_data, "$.name")
street = jsonpath(json_data, "$.address.street")
hobbies = jsonpath(json_data, "$.hobbies")

# 输出结果
print("Name:", name[0])
print("Street:", street[0])
print("Hobbies:", hobbies[0])

```
