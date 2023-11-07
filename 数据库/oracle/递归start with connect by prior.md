---
tags:
  - 递归
---

根据子节点的id对应的父节点id向上找到最终的父节点
```sql
start with child_id='1'  --递归起点
connect by  child_id= prior parent_id  
```
根据子节点向下找到以当前数据子节点为父节点的数据
```sql
start with child_id='1'  --递归起点
connect by prior  child_id=  parent_id  
```
prior为递归的方向，与=前后无关，start with 也只限定递归开始第一次查询的数据

通过dual递归出n条数据
```sql
select level from dual connect by 0 + level <= 10;
```
