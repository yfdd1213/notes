安装库

pip install pyinstaller

在py文件所在目录打开cmd，执行代码打包exe，生成dist文件夹下的exe文件即可

pyinstaller -F --hidden-import cx_Oracle --hidden-import openpyxl 获取视图用到的表.py

如果使用到了cx_Oracle库，需要把Oracle库打包进去

打开生成的.spec文件将[]替换成
```python
a.binaries+[('oraociei11.dll','D:\\oracle\\oraociei11.dll','BINARY'),('oci.dll','D:\\oracle\\oci.dll','BINARY'),('oraons.dll','D:\\oracle\\oraons.dll','BINARY')],
```


![](https://cdn.nlark.com/yuque/0/2023/png/25566838/1688455356918-24fabe23-0ed6-4e94-b7e5-346f804af10b.png)

然后再重新打包.spec文件

```python
pyinstaller 获取视图用到的表.spec
```
