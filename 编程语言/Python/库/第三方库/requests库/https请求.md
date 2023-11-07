##### 爬取https请求
```python
# verify:True/False,默认为True,认证SSL证书开关
# requests库会自动处理HTTPS的SSL证书验证，以确保安全的连接。你可以像处理HTTP响应一样处理HTTPS响应，包括检查状态码、获取响应内容等。

import requests

# 发送GET请求获取HTTPS网页内容
url = 'https://www.example.com'
response = requests.get(url)

# 检查响应状态码
if response.status_code == 200:
    print("Request successful")
else:
    print(f"Request failed with status code: {response.status_code}")

# 输出响应内容
print("Response Content:")
print(response.text)

# 关闭响应
response.close()

```