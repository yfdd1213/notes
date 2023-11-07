##### `Service(executable_path, port, verbose, log_path, service_args, env )`
- 继承自 class selenium.webdriver.chromium.webdriver.ChromiumService
```python
# executable_path - 可执行文件的安装路径，默认为 msedgedriver。
# Port - 运行服务的端口，默认值为0，由操作系统决定。

from selenium.webdriver.edge.service import Service
service = Service(executable_path="F:\msedgedriver.exe")  
```
