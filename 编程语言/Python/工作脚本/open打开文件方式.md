函数的格式
```
my_file = open(file, mode, buffering, encoding, errors, newline, closefd, opener)  # 打开文件
...  # 读写操作。省略
my_file.colse()  # 释放文件

```
file：文件路径或文件描述符。
mode：操作模式，可选，str类型，默认为r。可选值包括r、r+、w、w+、a、a+、x、x+、rb、wb、ab、xb、rt、at、wt、xt这16种。
buffering：缓冲设置，值可以是任意一个正整数、负整数或0，默认为-1。
encoding：打开文件所用的编码，可选，str类型，默认为None。文本编码有很多，常用的有utf-8、ascii、gbk等。
errors：编解码报错的处理模式，可选，str类型，默认为None。
strict：编解码错误则报错，ValueError。
ignore：编解码出现错误会忽略，不报错。
replace：编解码出现错误不会报错，会用?替代要写入或读取的无法解析的数据。
newline：换行符设置，可选，str类型，默认为None。
closefd：控制file参数的传入值类型。bool类型，默认为True
操作模式

| **mode参数** | **可做操作** | **若文件不存在** | **如何处理原内容** |
| --- | --- | --- | --- |
| r | 只可读 | 报错 | - |
| r+ | 可读可写 | 报错 | 是 |
| w | 只可写 | 创建 | 是 |
| w+ | 可读可写 | 创建 | 是 |
| a | 只可写 | 创建 | 否，追加 |
| a+ | 可读可写 | 创建 | 否，追加 |
| x | 只可写 | 创建 | - |
| x+ | 可读可写 | 创建 | - |


