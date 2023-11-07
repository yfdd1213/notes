##### bytes类型
- `bytes` 类型是一种不可变的序列类型，用于存储一个8bits字节数据。`bytes` 对象是由一系列整数（0-255 范围内）组成的，每个整数表示一个字节的值。`bytes` 类型通常用于处理二进制数据，例如文件读写、网络通信、加密等场景。
- [[字符编码]]
##### 创建字节对象
- [[bytes()]]
- [[字符串前缀|b 前缀]]
```python
# ascii编码可直接现实字符
# 创建空字节
a = bytes()
a = b''
# 字符串转字节
a = b'abc'
a = 'abc'.encode('UTF-8')
[x for x in a] # [97, 98, 99]
# 指定编码方式
a = bytes('abc',encoding='ASCII')
# 字节转字符串
a = b'abc'.decode('UTF-8')
```