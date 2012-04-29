(function( $ ) {
	$.fn.signature = function() {

		var el = this;
		
		var signature = "";
		var els = $(el).parents().get();
		els.unshift(el);

		for(var llc=0; llc<els.length; llc++) {

			var e = $(els[llc]);

			var id = e.attr('id');
			var clas = e.attr('class');
			var type = e.get(0).tagName;

			var index = e.index();

			var combinator = " ";
			if(e.siblings().length > 1) {
				combinator = ":nth-child(" + (index + 1) + ") "
			}

			if(id) {
				signature = "#" + id + combinator + signature;
			} else if(clas) {
				signature = '.' + clas + combinator + signature;
			} else if(type != 'HTML') {
	
				signature = type.toLowerCase() + combinator + signature;
			}
		}

		return signature.trim();
	};

})( jQuery );