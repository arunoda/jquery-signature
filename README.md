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