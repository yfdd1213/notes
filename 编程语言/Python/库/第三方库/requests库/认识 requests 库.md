##### 认识 requests 库
- `requests`是一个流行的Python第三方库，用于简化HTTP请求的发送和处理。它提供了一种简单且易于使用的方式来与Web服务器交互，发送GET、POST等各种类型的HTTP请求，以及处理服务器响应。
- https://requests.readthedocs.io/projects/cn/zh_CN/latest/
- 整体上，`requests`库的使用流程可以分为以下几个步骤：
1. **导入库**: 首先，在你的Python脚本或程序中导入`requests`库。
2. **发送请求**: 使用`requests.get()`、`requests.post()`、`requests.put()`等方法来发送不同类型的HTTP请求。
3. **处理响应**: 请求发送后，你会得到一个`Response`对象，其中包含了服务器的响应信息。
4. **获取响应内容**: 使用`.text`属性获取响应内容的字符串形式，使用`.content`属性获取响应内容的字节形式。
5. **处理异常**: 在请求过程中，可能会发生连接错误、超时等异常。你可以使用异常处理机制来捕获并处理这些异常。
6. **使用请求参数**: 可以通过`params`参数传递查询字符串参数，通过`data`参数传递POST请求的数据，通过`headers`参数设置请求头部信息。
7. **会话管理**: 使用`requests.Session`类可以在多个请求之间保持持续状态，如共享Cookie、身份验证状态等。
8. **SSL验证**: `requests`默认会验证SSL证书，但可以通过`verify`参数禁用验证，不过在生产环境中不建议这么做。
9. **文件上传与下载**: 可以使用`requests.post()`上传文件，使用响应对象的`.content`属性下载文件。
10. **处理JSON响应**: 使用`.json()`方法可以将JSON格式的响应内容解析为Python字典或列表。

