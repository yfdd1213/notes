##### shutil 库
```python
# 文件对象内容复制
shutil.copyfileobj(fsrc, fdst[, length])
	# 将文件对象 fsrc 的内容拷贝到文件对象 fdst

# 路径文件复制
shutil.copy(src, dst, *, follow_symlinks=True)
	# 将路径 src 的文件复制到 dst 路径目录或文件，不包括元数据，替换存在的
shutil.copyfile(src, dst, *, follow_symlinks=True)
	# 将路径 src 的文件复制到 dst 路径文件，不包括元数据，替换存在的
shutil.copy2(src, dst, *, follow_symlinks=True)
	# 同 copy()，尝试保留文件的元数据

# 路径目录复制
shutil.copytree(src, dst, ignore=None, dirs_exist_ok=False)
	# 将路径 src 的目录复制到 dst 路径目录下
	# ignore = shutil.ignore_patterns(p) 忽略文件
	# ignore=ignore_patterns('*.pyc', 'tmp*') 忽略两种文件
	# dirs_exist_ok=False 遇到存在目录文件报错，True不报错
shutil.move(src, dst, copy_function=copy2)
	# 递归将一个文件或目录 src 移至另一位置 dst 并返回目标位置

shutil.rmtree(path, ignore_errors=False, onerror=None)
	# 递归删除目录所有子目录和子文件
```
##### 示例
```python
import shutil

# 复制文件
source_file = 'source.txt'
destination_file = 'destination.txt'

shutil.copy(source_file, destination_file)
print(f'File "{source_file}" copied to "{destination_file}"')

# 复制目录及其内容
source_dir = 'source_folder'
destination_dir = 'destination_folder'

shutil.copytree(source_dir, destination_dir)
print(f'Directory "{source_dir}" copied to "{destination_dir}"')

# 删除目录及其内容
shutil.rmtree(destination_dir)
print(f'Directory "{destination_dir}" removed')

```