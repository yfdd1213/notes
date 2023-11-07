---
tags:
  - DBA操作
  - 查看系统表结构
---

查触发器
```sql
select trigger_name from all_triggers where table_name='XXX';  

```
查找索引
```
select t.Index_Name,t.table_name,t.column_name,i.tablespace_name,i.uniqueness 
from user_ind_columns t,user_indexes i 
where t.index_name=i.index_name 
and t.table_name=i.table_name 
and t.table_name='大写表名：这里不支持小写表名';
```
查找约束，主键、唯一键、外键
```
select cu.* 
from user_cons_columns cu, user_constraints au 
where cu.constraint_name = au.constraint_name 
and au.constraint_type in( 'P' ,'U','R')
and au.table_name = '大写表名';
```
查找表结构、字段类型
```
select t.*,c.COMMENTS 
from user_tab_columns t,user_col_comments c 
where t.table_name = c.table_name 
and t.column_name = c.column_name 
and t.table_name = '大写表名'
```
查找表、存储过程、函数、视图、触发器创建时间和最后一次修改时间
```sql

--存储过程

select * from sys.all_objects where OBJECT_NAME = '大写' and OBJECT_TYPE='PROCEDURE' order by LAST_DDL_TIME desc

--触发器

select * from sys.all_objects where OBJECT_NAME = '大写' and OBJECT_TYPE='TRIGGER' order by LAST_DDL_TIME desc

--表

select * from sys.all_objects where OBJECT_NAME = '大写' and OBJECT_TYPE='TABLE' order by LAST_DDL_TIME desc

--视图

select * from sys.all_objects where OBJECT_NAME = '大写' and OBJECT_TYPE='VIEW' order by LAST_DDL_TIME desc
```

查询表被哪些视图调用：
```sql
SELECT owner, name, type, referenced_owner, referenced_name, referenced_type
FROM dba_dependencies
WHERE referenced_name = '大写表名'
```
查询表被哪些存储过程或函数调用：
```sql
SELECT owner, name, type, referenced_owner, referenced_name, referenced_type
FROM dba_dependencies
WHERE referenced_name = '大写表名'
AND (type = 'FUNCTION' OR type = 'PROCEDURE')
```
