##### CSS
- CSS （Cascading Style Sheets，层叠样式表）是用来控制网页HTML在浏览器中的显示外观的声明式语言，定义了如何在网页中呈现 HTML 元素，包括字体、颜色、间距、大小、边框等外观属性
##### CSS 语法
- 一条 CSS 规则包含一个 `选择器` 和一组 `属性` 定义。
- 意思就是选择一个 HTML 元素并规定其外观属性
- 下面这个例子用来将页面中的所有 `<p>` 标签显示为黑色背景和黄色文本：
```css
/* p选择符用来选择页面中的所有<p>标签 */

p {
  /* color 属性用来定义文本颜色，这里为黄色 */
  color: yellow;

  /* background-color 属性用来定义元素的背景色，这里为黑色 */
  background-color: black;
}
```
##### CSS 应用
- CSS 样式定义可存储在HTML中或外部CSS文件中
```css
外部样式表
<link rel="stylesheet" href="styles.css">

内部样式表
<style>
	h1 {
		color: blue;
        background-color: yellow;
        border: 1px solid black;
    }

	p {
        color: red;
    }
</style>

内联样式
<h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
```
