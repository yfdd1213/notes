##### CSS
- [[CSS 基础]]
- [[CSS 层叠与继承]]
- [[CSS 选择器]]
##### 示例
- 为 body 元素添加默认字体、背景颜色以及外边距和内边距。
- 为 h1 元素设置标题的颜色、字体大小和上外边距。
- 为 p 元素设置段落的颜色、字体大小、行高和下外边距。
```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Example</title>
    <style>
        /* 样式表开始 */

        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        h1 {
            color: #333;
            font-size: 28px;
            margin-top: 20px;
        }

        p {
            color: #666;
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 20px;
        }

        /* 样式表结束 */
    </style>
</head>
<body>

<h1>Welcome to My Website</h1>
<p>This is a simple example of applying CSS styles to HTML elements.</p>
<p>You can customize the colors, fonts, and layout to create your own unique design.</p>

</body>
</html>

```