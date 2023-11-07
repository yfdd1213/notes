##### 认识 selenium 库
- **Selenium** 是一个用于自动化浏览器操作的Python库。它允许你模拟用户在浏览器中的操作，比如点击、填写表单、提交、导航等，以及获取页面内容、截图等。Selenium 最初是为测试Web应用程序而开发的，但也被广泛用于网络爬虫、数据采集和自动化任务中。
- https://www.selenium.dev/selenium/docs/api/py/api.html#
- https://www.selenium.dev/zh-cn/documentation/
	1. **模拟用户操作**：Selenium 可以自动打开浏览器并模拟用户操作，如点击、输入文本、提交表单等。这使得它在需要与动态JavaScript页面交互的场景中特别有用。
	2. **处理JavaScript渲染**：Selenium 可以加载和渲染动态JavaScript内容，这使得它能够访问通过JavaScript生成的内容，如通过AJAX请求加载的数据。
	3. **跨浏览器支持**：Selenium 支持多种浏览器，包括Chrome、Firefox、Edge、Safari等。这使得你可以在不同浏览器中运行相同的测试或爬虫任务。
	4. **元素定位和操作**：Selenium 提供了多种方法来定位和操作网页上的元素，例如使用CSS选择器、XPath表达式等。
	5. **页面截图**：你可以使用 Selenium 拍摄当前页面的截图，这在调试、验证页面和生成报告时非常有用。
	6. **等待机制**：Selenium 允许你添加等待操作，以便在需要等待元素可见、加载或其他条件满足时继续执行。
	7. **支持多种编程语言**：除了Python，Selenium 还支持其他编程语言，如Java、C#、Ruby等。
