
### **os.path.exists(path)**
作用：判断指定路径下的目录是否存在，存在True,不存在False。

### **os.path.sep()**
作用：返回当前操作系统的路径分隔符。

### **os.path.getsize(path)**
作用：返回路径下**文件**的大小。(以**字节**为单位)
```python
import os
path = r"E:\\04picture\\高清好图\\222.jpg"
y = os.path.getsize(path)
print(y)
 
#结果：
#21522
```

### **os.path.isfile(path)**
作用：传入一个完整的文件路径，判断它是否是文件。

### **os.path.isdir(path)**
作用：传入一个完整的文件路径，判断它是否是目录。

### **os.path.basename(path)**
作用：传入一个完整的文件路径，只获取其**文件名**。

### **os.path.dirname(path)**
作用：传入一个完整的文件路径，只获取其**绝对路径。**
```python
#举例：
import os
path = r"E:\\04picture\\高清好图\\222.jpg"
y = os.path.dirname(path)
print(y)
 
#结果：
#E:\\04picture\\高清好图
```


### **os.path.split(path)**
作用：传入一个完整的path路径，将其拆分为**绝对路径和文件名两部分**。
```python
#例子：
import os
path = r"E:\\04picture\\高清好图\\222.jpg"
y = os.path.split(path)
print(y)
 
#结果：
#('E:\\\\04picture\\\\高清好图', '222.jpg')
```
### os.path.splitext()
作用：传入一个完整的path路径，文件拆分为：文件名和扩展名。

### **os.path.join(path1,path2)**
作用：传入两个path路径(第二个也可以是文件名)，将该路径拼接起来，形成一个新的完整路径。
```python
#举例1：
import os
path1 = r"E:\\04picture\\高清好图"
path2 = "222.jpg"
y = os.path.join(path1, path2)
print(y)
 
#结果：
#E:\\04picture\\高清好图\222.jpg
 
#举例2：
# 如果最后一个组件为空，则生成的路径以一个’/’分隔符结尾
import os
path1 = r"E:\\04picture\\高清好图"
path2 = ""
y = os.path.join(path1, path2)
print(y)
 
#结果：
#E:\\04picture\\高清好图\
 
#举例3：
# 如果有一个组件是一个绝对路径，则在它之前的所有组件均会被舍弃
import os
path1 = "E:\04picture\高清好图\222.jpg"
path2 = "222.jpg"
y = os.path.join(path1, path2)
print(y)
 
#结果：
#E:picture\高清好图.jpg\222.jpg
```

