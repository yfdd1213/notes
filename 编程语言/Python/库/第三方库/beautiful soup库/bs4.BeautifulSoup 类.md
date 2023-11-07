##### BeautifulSoup 构造方法
- HTML 文档树
```python
BeautifulSoup(html, 解析器)
```
##### BeautifulSoup 实例属性
```python
BeautifulSoup.tag  # 返回 Tag 类
BeautifulSoup.tag.string  # 返回 NavigableString 类
BeautifulSoup.tag.string  # 返回 Comment 类 <!-- ** -->
```
##### 方法
- [[搜索API过滤器]]
- [[BeautifulSoup.find_all()]] 过滤器
- [[BeautifulSoup.select()]] css选择器
```python
BeautifulSoup.prettify() # 格式化为易读html字符串

BeautifulSoup.find_all( name , attrs , recursive , string , **kwargs )  # 只搜索当前节点的所有子节点,孙子节点，返回文档中符合条件的所有标签
BeautifulSoup.find( name , attrs , recursive , string , **kwargs )  # 只搜索当前节点的所有子节点,孙子节点，返回第一个找到的
```