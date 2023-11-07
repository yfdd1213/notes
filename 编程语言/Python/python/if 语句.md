- 使用保留字 [[if]]、[[elif]]、[[else]]
```python
# if语句形式1
'''
if 判断条件1:
	执行语句1
elif 判断条件2:
	执行语句2
elif 判断条件3:
	执行语句3
else: 
	执行语句4
'''

num = 10
if num > 0:
    print("Number is positive.")
elif num < 0:
    print("Number is negative.")
else:
    print("Number is zero.")
# 输出: Number is positive.


# if语句形式2
'''
表达式1 if 判断条件 else 表达式2
'''

print(1) if 1>0 else print(0)
```