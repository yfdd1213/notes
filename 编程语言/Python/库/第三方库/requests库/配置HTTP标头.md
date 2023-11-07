##### 配置HTTP标头
```python
# 用户代理标头
url = ''
try:
	# HTTP标头
	headers = {'user-agent':'Mozilla/5.0'}
	r = requests.get(url, headers = headers)
	r.raise_for_status()
	r.encoding = r.apparenr_encoding
	print(r.text(1000:2000))
except:
	print('爬取失败')

# cookie标头
headers = {
    "user-agent": "Mozilla",
    "cookie": 'Cookie值'
}
res = requests.get('', headers=headers, allow_redirects=False)


```

