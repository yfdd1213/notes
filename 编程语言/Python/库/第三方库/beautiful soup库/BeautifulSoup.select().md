##### `BeautifulSoup.select()`
```python
# 标签选择器
BeautifulSoup.select('td')

# id选择器
BeautifulSoup.select("#id")

# 类选择器
BeautifulSoup.select(".class")

# 标签往下层选择所有
BeautifulSoup.select("html head title")

# 标签同层选择第一个
BeautifulSoup.select("ul + p")

# 指定id标签的第一个子元素 
BeautifulSoup.select("div#id > ul")

# 相邻的所有元素
BeautifulSoup.select("table ~ div")

# 属性选择
BeautifulSoup.select("a[title]")

# 属性值选择
BeautifulSoup.select("a[class='title']")
BeautifulSoup.select("a[class*='title']") # 包含
BeautifulSoup.select("a[class^='title']") # 开头
BeautifulSoup.select("a[class$='title']") # 结尾

# 混合使用选择器，每个选择器中间空格


```