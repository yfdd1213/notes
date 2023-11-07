##### Comment 创建对象
- 注释字符串
```python
soup = BeautifulSoup("<b><!--Hey, buddy. Want to buy a used parser?--></b>")
soup.b.string  # 'Hey, buddy. Want to buy a used parser?'

type(comment)  # <class 'bs4.element.Comment'>

```