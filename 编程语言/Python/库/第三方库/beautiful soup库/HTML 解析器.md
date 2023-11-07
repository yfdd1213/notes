##### HTML 解析器
- 推荐使用lxml作为解析器,因为效率更高. 在Python2.7.3之前的版本和Python3中3.2.2之前的版本,必须安装lxml或html5lib, 因为那些Python版本的标准库中内置的HTML解析方法不够稳定.

|解析器|使用方法|优势|劣势|
|---|---|---|---|
|Python标准库|`BeautifulSoup(markup, "html.parser")`|- Python的内置标准库<br>- 执行速度适中<br>- 文档容错能力强|- Python 2.7.3 or 3.2.2)前 的版本中文档容错能力差|
|lxml HTML 解析器|`BeautifulSoup(markup, "lxml")`|- 速度快<br>- 文档容错能力强|- 需要安装C语言库|
|lxml XML 解析器|`BeautifulSoup(markup, ["lxml-xml"])`<br><br>`BeautifulSoup(markup, "xml")`|- 速度快<br>- 唯一支持XML的解析器|- 需要安装C语言库|
|html5lib|`BeautifulSoup(markup, "html5lib")`|- 最好的容错性<br>- 以浏览器的方式解析文档<br>- 生成HTML5格式的文档|- 速度慢<br>- 不依赖外部扩展|
