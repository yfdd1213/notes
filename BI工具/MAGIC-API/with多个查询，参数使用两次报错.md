会报错的代码
```javascript
wgid='1';
sql="""
with jgy as (
  select 1 as num  
where  #{wgid}='1'

),
  xgy as (
    select 2 as num1  
where   #{wgid}='1'
)
select *
  from jgy                                
"""
```
不报错代码
```javascript
wgid='1';
sql="""
with jgy as (
	select 1 as num  
	where  #{wgid}='1'

					),
xgy as (
	select 2 as num1  
	where   #{wgid}='1'
                  )
select *
from jgy, xgy                               
"""
```
```javascript
wgid='1';
sql="""
with jgy as (
	select 1 as num  
	where  #{wgid}='1'

					),
xgy as (
	select 2 as num1  

                  )
select *
from jgy                             
"""
```
```javascript
wgid='1';
sql="""
with jgy as (
	select 1 as num  
	where  '1'='1'

					),
xgy as (
	select 2 as num1  
	where   '1'='1'
                  )
select *
from jgy                               
"""
```
