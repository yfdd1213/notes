---
tags:
  - 动态sql
  - 循环提交
---

大批量数据分批次进行更新
```sql
declare
  n_count number;
begin
  select ceil(count(1)/100000) into n_count
  from T_ORDER where tstatus is null;
  for i in 1..n_count loop
    update T_ORDER set tstatus='1' where tstatus is null and rownum<=100000;
    commit;
  end loop;
end;
```
[https://blog.csdn.net/jycjyc/article/details/125699156](https://blog.csdn.net/jycjyc/article/details/125699156)
