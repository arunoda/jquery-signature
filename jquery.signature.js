(function( $ ) {
	$.fn.signature = function() {

		var el = this;
		
		var signature = "";
		var els = $(el).parents().get();
		els.unshift(el);

		for(var llc=0; llc<els.length; llc++) {

			var e = els[llc];

			var id = $(e).attr('id');
			var clas = $(e).attr('class');
			var type = $(e).get(0).tagName;

			var index = $(e).index();

			if(id) {
				signature = "#" + id + " " + signature;
			} else if(clas) {
				signature = '.' + clas + " " + signature;
			} else if(type != 'HTML') {
	
				if(llc==0) {
					signature = type.toLowerCase() + ":nth-child(" + (index + 1) + ") " + signature;
				} else {
					signature = type.toLowerCase() + " " + signature;
				}
			}
		}

		return signature.trim();
	};

})( jQuery );