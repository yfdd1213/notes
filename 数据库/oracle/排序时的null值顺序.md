---
tags:
  - 排序
---

排序时需要指定null值的顺序，默认情况为排在最前面
```sql
-- 空值在后面
select t.film_score,t.star_level,t.one_star 
from T_JASON_HOT_FILM t 
order by t.star_level desc nulls last;
-- 空值在前面
select t.film_score,t.star_level,t.one_star 
from T_JASON_HOT_FILM t 
order by t.star_level desc nulls first;
```
