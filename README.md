jquery-signature
================

Getting a unique signature for a dom event using jQuery

Why - Use Case
--------------

* I can select a dom element using a click event where the mouse is headed over
* Then I save this elements position in a db
* Later some point get this div and make highlighted

Solution
--------

This is why I created this (very small) library to get a unique signature for a dom element. And it can be directly used with jQuery.

**This works if there is no id or class evan not defined :)**

Example
-------

~~~javascript
$('body').click(function(e) {

	var target = e.target;
	var signature = $(e.target).signature();

	localStorage.setItem('dom-el-sig', signature);
});

//in another code

function showEl() {
	
	var sig = localStorage.getItem('dom-el-sig');
	$(sig).hide().show(300);
}
~~~

### Licence
The MIT License

Copyright (c) 2012 Arunoda Susiripala

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.