var tatCookie = function() {

	if (document.body.classList.contains('js-cookie')) {
		
	    let match = document.cookie.match(new RegExp('cookielaw=([^;]+)'));
		if (!match) {
	  		
	  		let cookieDiv = document.createElement('div');
	  		cookieDiv.id = 'cookielaw';
	  		let cookieMsgDiv = document.createElement('div');
	  		cookieMsgDiv.id = 'cookielaw-msg';
	  		cookieMsgDiv.innerHTML = document.body.dataset.cookieMsg;
	  		let cookieBtnDiv = document.createElement('div');
	  		cookieBtnDiv.id = 'cookielaw-btn';
	  		let cookieAccept = document.createElement('button');
	  		cookieAccept.id = 'cookiewlaw-accept';
	  		cookieAccept.innerHTML = document.body.dataset.cookieBtn;
	  		
	  		cookieBtnDiv.prepend(cookieAccept);
	  		cookieDiv.prepend(cookieBtnDiv);
	  		cookieDiv.prepend(cookieMsgDiv);
	  		document.body.prepend(cookieDiv);
	  		
	  		setTimeout(function(){ cookieDiv.classList.add('fade-in'); }, 1000);
	  		
	  		cookieAccept.addEventListener('click', function() {
		  		cookieDiv.classList.add('fade-out');
		  		setTimeout(function(){ cookieDiv.remove(); }, 500);
		  		
		  		var d = new Date();
			    d.setTime(d.getTime() + (90*24*60*60*1000));
			    var expires = "expires="+d.toUTCString();
			    document.cookie = 'cookielaw=Seen; ' + expires;
	  		});
		    
		}
	} 
	
};

tatCookie();

export { tatCookie as tatCookie }
	