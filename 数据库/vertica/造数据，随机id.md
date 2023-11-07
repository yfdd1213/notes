---
tags:
  - 生成随机数
---

```sql
SELECT substr(to_char(random()), 3, 20) AS BS,
       substr(to_char(random()), 3, 20) AS XKBS,
       DATAID                           AS QYBS,
       FLOOR(100 + RANDOM() * 900) num,
       now() - (FLOOR(RANDOM() * DATEDIFF(day,trunc(sysdate,'year'),sysdate) ) + 1) * INTERVAL '1 day'  as yxqq,
       '10'                             as xkzzt,
       '7110'                           as ywlb,
       case
           when substr(to_char(random()), 3, 1) > '7' then '调味品，饮料'
           when substr(to_char(random()), 3, 1) > '5' then '薯类和膨化食品，水果制品'
           when substr(to_char(random()), 3, 1) > '3' then '预包装食品（不含冷藏冷冻食品）销售'
           else '蛋制品,食用油、油脂及其制品' end       SPLB
from F_B_WGRL
```
