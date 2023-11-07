##### 元素选择器 
- `元素 {样式声明}`
```css
span {
  background-color: DodgerBlue;
  color: #ffffff;
}
```
##### 伪元素选择器
- `基础选择器::伪元素 { }`
```css
/* 每一个 <p> 元素的第一行。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```
##### 类选择器
- `(元素).类名 {样式声明}`
```css
span.classy {
  background-color: DodgerBlue;
}
```
##### 伪类选择器 
- `基础选择器:伪类 { }`
```css
/* 所有用户指针悬停的按钮 */
button:hover {
  color: blue;
}
```
##### 元素属性选择器 
- `[attr]` 带有 attr 属性的元素
- `[attr=value]` 带有 attr 属性，值为 value 的元素
- `[attr~=value]` 带有 attr 属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value
- `[attr|=value]` 带有 attr 属性的元素，值为“value”或是以“value-”为前缀开头
- `[attr^=value]` 带有 attr 属性，值是以 value 开头的元素。
- `[attr$=value]` 带有 attr 属性，值是以 value 结尾的元素。
- `[attr*=value]` 带有 attr 属性，值至少包含一个 value 值的元素。
```css
a {
  color: blue;
}

/* 以 "#" 开头的页面本地链接 */
a[href^="#"] {
  background-color: gold;
}

/* 包含 "example" 的链接 */
a[href*="example"] {
  background-color: silver;
}

/* 包含 "insensitive" 的链接,不区分大小写 */
a[href*="insensitive" i] {
  color: cyan;
}

/* 包含 "cAsE" 的链接，区分大小写 */
a[href*="cAsE" s] {
  color: pink;
}

/* 以 ".org" 结尾的链接 */
a[href$=".org"] {
  color: red;
}
```
##### ID 选择器
- `#id属性值 {样式声明}`
```css
/* The element with id="demo" */
#demo {
  border: red 2px solid;
}
```
##### 后代选择器
- `选择器1 选择器2 { }`
```css
/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```
##### 子代选择器
- `元素1 > 元素2 {样式声明}`
```css
span { background-color: white; }
div > span {
  background-color: DodgerBlue;
}
```
##### 相邻兄弟选择器 
- `前元素 + 目标元素 { }`
```css
/* 图片后面紧跟着的段落将被选中 */
img + p {
  font-weight: bold;
}

li:first-of-type + li {
  color: red;
}
```
##### 通用兄弟选择器
- `前元素 ~ 目标元素 { }`
```css
p ~ span {
  color: red;
}
```
##### 选择器列表
组合规则相同的选择器为选择器列表，必须全部有效
```css
h1,
.special {
  color: blue;
} 
```