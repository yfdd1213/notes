---
tags:
  - 自定义函数
---

```sql
--自定义字符型，一个转码一个默认值
CREATE OR REPLACE FUNCTION decode(
	pTarget     IN varchar,
	pCompare1   IN varchar,
	pValue1     IN varchar,
	pDefault    IN varchar
) RETURNS varchar as $body$
DECLARE
BEGIN
	if pCompare1 is null and pTarget is null then
		return ( pValue1 );
	else 
		return (
			CASE pTarget
				WHEN pCompare1 THEN pValue1
				ELSE pDefault
			END
		);
	end if;
END;
$body$
language plpgsql;

--自定义数值型，一个转码一个默认值
CREATE OR REPLACE FUNCTION decode(
	pTarget     IN numeric,
	pCompare1   IN numeric,
	pValue1     IN numeric,
	pDefault    IN numeric
) RETURNS numeric as $body$
DECLARE
BEGIN
	if pCompare1 is null and pTarget is null then
		return ( pValue1 );
	else 
		return (
			CASE pTarget
				WHEN pCompare1 THEN pValue1
				ELSE pDefault
			END
		);
	end if;
END;
$body$
language plpgsql;
 
--自定义日期型，一个转码一个默认值
CREATE OR REPLACE FUNCTION decode(
	pTarget     IN date,
	pCompare1   IN date,
	pValue1     IN date,
	pDefault    IN date
) RETURNS date as $body$
DECLARE
BEGIN
	if pCompare1 is null and pTarget is null then
		return ( pValue1 );
	else 
		return (
			CASE pTarget
				WHEN pCompare1 THEN pValue1
				ELSE pDefault
			END
		);
	end if;
END;
$body$
language plpgsql;
 
CREATE OR REPLACE FUNCTION decode(
	pTarget     IN varchar,
	pCompare1   IN varchar,
	pValue1     IN varchar,
	pCompare2   IN varchar,
	pValue2     IN varchar,
	pDefault    IN varchar
) RETURNS varchar as $body$
DECLARE
BEGIN
	if pCompare1 is null and pTarget is null then
		return ( pValue1 );
	elsif pCompare2 is null and pTarget is null then
		return ( pValue2 );
	else
		return (
			CASE pTarget
				WHEN pCompare1 THEN pValue1
				WHEN pCompare2 THEN pValue2
				ELSE pDefault
			END
		);
	end if;
END;
$body$
language plpgsql;
 
 
CREATE OR REPLACE FUNCTION decode(
	pTarget     IN numeric,
	pCompare1   IN numeric,
	pValue1     IN numeric,
	pCompare2   IN numeric,
	pValue2     IN numeric,
	pDefault    IN numeric
) RETURNS numeric as $body$
DECLARE
BEGIN
	if pCompare1 is null and pTarget is null then
		return ( pValue1 );
	elsif pCompare2 is null and pTarget is null then
		return ( pValue2 );
	else
		return (
			CASE pTarget
				WHEN pCompare1 THEN pValue1
				WHEN pCompare2 THEN pValue2
				ELSE pDefault
			END
		);
	end if;
END;
$body$
language plpgsql;
 
CREATE OR REPLACE FUNCTION decode(
	pTarget     IN date,
	pCompare1   IN date,
	pValue1     IN date,
	pCompare2   IN date,
	pValue2     IN date,
	pDefault    IN date
) RETURNS date as $body$
DECLARE
BEGIN
	if pCompare1 is null and pTarget is null then
		return ( pValue1 );
	elsif pCompare2 is null and pTarget is null then
		return ( pValue2 );
	else
		return (
			CASE pTarget
				WHEN pCompare1 THEN pValue1
				WHEN pCompare2 THEN pValue2
				ELSE pDefault
			END
		);
	end if;
END;
$body$
language plpgsql;
```
