##### aiohttp 客户端
- [[aiohttp 客户端示例]]
- [[class aiohttp.ClientSession]]  客户端会话
- [[class aiohttp.ClientResponse]]  客户端响应
##### 示例
```python
import aiohttp
import asyncio

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def process_page(url):
    async with aiohttp.ClientSession() as session:
        content = await fetch_url(session, url)
        # 在这里可以对网页内容进行处理，比如解析页面、提取数据等
        return len(content)

async def main():
    urls = ['http://example.com', 'http://example.org', 'http://example.net']
    
    tasks = []
    for url in urls:
        tasks.append(asyncio.create_task(process_page(url)))
    
    results = await asyncio.gather(*tasks)
    print("Content lengths:", results)

asyncio.run(main())

```