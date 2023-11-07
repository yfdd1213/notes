---
tags:
  - 坐标
---

点位在多边形内判断sql：
```sql
select name, lng, lat from zd where point(lng, lat) <@ polygon(path('(( 118.22342, 23.1299494 ), (119.292001, 29.993993), (118.44520992, 25.1320021))'));
```
