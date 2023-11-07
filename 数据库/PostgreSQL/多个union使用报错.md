---
tags:
  - union
---

在使用多个union 查询时，若某个字段在前两个查询中都是设置常量null，在第三个及之后的查询中取了该字段值，会报错，因为前两个将字段类型默认为字符串，需要在第一个字段设置数据类型，如：cast（null as numeric） as   column
