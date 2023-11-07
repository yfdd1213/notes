---
tags:
  - 数据交换
  - 报错
---

报错：column "commitment" is of type bytea but expression is of type character varying 建议：You will need to rewrite or cast the expression；
源端表数据类型为bytea，但写成视图时，不能存在这个类型，给字段设为null时，默认字符类型，抽数会报错，数据类型不一致，所以需要在配置数据源时加上
jdbc:postgresql://192.*.*.*:5432/datebase?stringtype=unspecified
原文链接
[https://blog.csdn.net/gsc1456/article/details/124497555](https://blog.csdn.net/gsc1456/article/details/124497555)