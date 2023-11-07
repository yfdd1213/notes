---
tags:
  - DDL操作
  - 数据库锁死
---

查询锁死且正在运行的进程
```
select username,lockwait,status,machine,program,sql_text from v$session
INNER JOIN v$sql hv ON sql_hash_value=hv.hash_value
where 
sid in
(select session_id from v$locked_object)
AND status='ACTIVE'
```
杀死进程
```sql
select SID,sql_text,SERIAL# from v$session
INNER JOIN v$sql hv ON sql_hash_value=hv.hash_value;
alter system kill session 'sid,serial#'; 
```
查看数据库表空间使用率
```sql
--查看数据库表空间使用率
select total.tablespace_name,round(total.MB, 2) as Total_MB,round(total.MB - free.MB, 2) as Used_MB,round((1-free.MB / total.MB)* 100, 2) || '%' as Used_Pct 
from (
select tablespace_name, sum(bytes) /1024/1024 as MB 
from dba_free_space group by tablespace_name) free,
(select tablespace_name, sum(bytes) / 1024 / 1024 as MB 
from dba_data_files group by tablespace_name) total     
where free.tablespace_name = total.tablespace_name 
order by used_pct desc;

```

查看表空间总大小、使用率、剩余空间
```sql
--查看表空间总大小、使用率、剩余空间
select a.tablespace_name, total, free, total-free as used, substr(free/total * 100, 1, 5) as "FREE%", substr((total - free)/total * 100, 1, 5) as "USED%"
from
(select tablespace_name, sum(bytes)/1024/1024 as total from dba_data_files group by tablespace_name) a,
(select tablespace_name, sum(bytes)/1024/1024 as free from dba_free_space group by tablespace_name) b
where a.tablespace_name = b.tablespace_name
order by a.tablespace_name

```
查找表所在表空间
```sql
select * from all_tables where table_name='大写表名'
```
