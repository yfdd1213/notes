##### aiohttp 客户端示例
```python
# 异步请求
import asyncio
import time
import aiohttp

async def async_http():
    # 声明一个支持异步的上下文管理器
    async with aiohttp.ClientSession() as session:
        res = await session.get('http://httpbin.org/delay/2')
        print(f'当前时间：{time.ctime()}, status_code = {res.status}')

tasks = [async_http() for _ in range(5)]
start = time.time()
asyncio.run(asyncio.wait(tasks))
print(f'aiohttp异步耗时：{time.time() - start}')


# 同步请求
import time
import requests

def main():
    start = time.time()
    for i in range(5):
        res = requests.get('http://httpbin.org/delay/2')
        print(f'当前时间：{time.ctime()}, status_code = {res.status_code}')
    print(f'requests同步耗时：{time.time() - start}')

if __name__ == '__main__':
    main()

```

