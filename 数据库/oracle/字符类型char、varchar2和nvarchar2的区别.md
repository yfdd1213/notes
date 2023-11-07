---
tags:
  - 数据类型
  - 编码格式
---

char与varchar2
char类型为固定长度，char(64)当存入数据实际长度为小于64时，会在最后补充空格，然后这条数据的实际长度为64.
varchar2为实际长度，varchar2(64)当存入数据实际长度小于64时，这条数据的实际长度为数据本身的长度，不占用额外空间。
nvarchar2与varchar2
nvarchar2在 编码格式为utf-8和GBK时，不管字母还是汉字都是占用2个字节
varchar2在编码格式为GBK时汉字和字母都是占用2个字节，在编码格式为utf-8时英文占用1个字节，汉字占用3个字节
char与varchar2：[https://blog.csdn.net/footbridge/article/details/125316507](https://blog.csdn.net/footbridge/article/details/125316507)
nvarchar2与varchar2：[https://blog.csdn.net/u013047660/article/details/21452361](https://blog.csdn.net/u013047660/article/details/21452361)
