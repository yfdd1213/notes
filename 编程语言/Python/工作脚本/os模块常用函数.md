
```python
import os
```
### **os.getcwd()**
作用：获取当前文件绝对路径。
```python
 
import os
x = os.getcwd()
print("os.getcwd()",x)
 
#结果：
#os.getcwd() C:\Users\Lenovo\Desktop
```
### **os.listdir(path)**
作用：传入路径之后，返回该路径下所有文件和目录组成的**列表。**
```python
#例子：
import os
path = os.getcwd()
y = os.listdir(path)
print("os.listdir():",y,sep="\n")
 
#结果：
#os.listdir():
#['$RECYCLE.BIN', '01研究方向资料', '02其他文件和资料', '03Project', '04picture', '05Download', '06Mendeley paper', '07Microsoft', '114 mask机制_52studyit.com.mp4', 'FFOutput', 'import os.py', 'System Volume Information']
```
### **os.walk(path)**
作用：传入任意一个path路径，遍历指定路径下的所有子文件夹，**返回的是一个由路径、文件夹列表、文件列表组成的元组。**
```python
#例子1：
import os
path = os.getcwd()
y = os.walk(path)
print("os.walk():",y,sep="\n")
 
#结果：
#<generator object walk at 0x000001A4EA787A98>
 
#例子2：
import os
path = os.getcwd()
y = os.walk(path)
# 元组拆包--就是将一个元组中的每个值，赋值给不同的变量；一般用遍历返回值
for path,dirs,files in y:   
    print("path",path)
    print ("dirs",dirs)
    print("files",files)
 
#结果：（部分）
#path E:\FFOutput
#dirs []
#files []
```
### **os.mkdir(path)**
作用：传入一个path路径，创建单层文件夹。
```python
#举例：
import os
path1 = "E:\\04picture\\高清好图\\aa"
y = os.mkdir(path1)
print(y)
 
#结果：
#None
#注：只能创建原先没有的文件夹，所以创建之前一般判断os.path.exists(path)该文件夹是否存在。
```
### **os.makedirs(path)**
作用：传入一个path路径，生成一个**递归的文件夹。**
注：如果文件夹存在，就会报错。因此创建文件夹之前，一般使用os.path.exists(path)函数判断文件夹是否存在。

### **os.system(command)**
os.system()方法在子shell中执行命令(字符串)。该方法是通过调用标准C函数system()来实现的，并且具有相同的限制。如果命令生成任何输出，则将其发送到解释器标准输出流。无论何时使用此方法，都将打开操作系统的相应 shell 并在其上执行命令。
```python
os.system('notepad.exe')#打开记事本
os.system('calc.exe')#打开计算器
```
### os.startfile("path")
os.system（）是主进程打开新的窗口，原窗口进入休眠状态，待新的窗口关闭，主进程再重新唤醒原窗口；
os.startfile()是主进程创建一个子进程去打新的窗口，主进程创建完成子进程后立即继续往下执行
```python
os.startfile(r'E:\语雀\yuque-desktop\语雀.exe')
```
