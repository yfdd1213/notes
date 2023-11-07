##### HTML
- [[HTML 基础]]
- [[HTML 基本结构]]
##### 示例
- 以下是一个简单的包含表格的 HTML 结构示例：
```html
<!DOCTYPE html>
<html>
	<head>
	    <title>Table Example</title>
	    <style>
	        table {
	            border-collapse: collapse;
	            width: 100%;
	            border: 1px solid #ddd;
	        }
	        th, td {
	            padding: 8px;
	            border: 1px solid #ddd;
	            text-align: left;
	        }
	        th {
	            background-color: #f2f2f2;
	        }
	    </style>
	</head>
	
	<body>
		<h2>Student Information</h2>
		<table>
		    <thead>
		        <tr>
		            <th>ID</th>
		            <th>Name</th>
		            <th>Age</th>
		            <th>Grade</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr>
		            <td>101</td>
		            <td>John Doe</td>
		            <td>20</td>
		            <td>85</td>
		        </tr>
		        <tr>
		            <td>102</td>
		            <td>Jane Smith</td>
		            <td>22</td>
		            <td>92</td>
		        </tr>
		        <tr>
		            <td>103</td>
		            <td>Michael Johnson</td>
		            <td>19</td>
		            <td>78</td>
		        </tr>
		    </tbody>
		</table>
	</body>
</html>

```
- 以下是一个简单的包含表格的 HTML 结构示例：

<html>
<head>
    <title>Table Example</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>Student Information</h2>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>John Doe</td>
            <td>20</td>
            <td>85</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Jane Smith</td>
            <td>22</td>
            <td>92</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Michael Johnson</td>
            <td>19</td>
            <td>78</td>
        </tr>
    </tbody>
</table>

</body>
</html>
