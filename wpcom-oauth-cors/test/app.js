
/**
 * Module dependencies.
 */

var params = {'redirect_uri': 'http://127.0.0.1:5000'}
var wpOAuth = require('../')('41156', params);  // -< complete your client_id

var $ = require('jquery');

// curl  -H 'authorization: Bearer 4MKwUGHAZoaVcSGXGB(^O@cf8&!4iO@rL9yPqeNXvFUF3F4w2SBkz8iZ#zMzD#JX'  
// 'https://public-api.wordpress.com/rest/v1.1/sites/93413589/media?pretty'

wpOAuth.get(function(auth){
    document.getElementById('token').innerHTML = auth.access_token;
    console.log("blog id ",auth.blog_id);
    console.log("blog url ",auth.blog_url);
    console.log("token type ",auth.token_type);
    $.ajax( {
	type: "GET",
	crossDomain: true,    
	beforeSend : function( xhr ) {
	    token = auth.access_token;
	    console.log ("token: --->", token);
	    xhr.setRequestHeader( 'Authorization', 'bearer ' + token );
	    console.log("xhr .................", xhr);
	},
	dataType: "jsonp",   
	url: 'https://public-api.wordpress.com/rest/v1.1/sites/' + 93413589 + '/media',
	success: function( response ) {
	    // response
	    console.log("success");
        },
	error: function (response){
	    console.log("error", response);
	}
    });
});

document.getElementById('reset').onclick = function(e) {
  wpOAuth.clean();
};

console.log('-> wpOAuth.token() -> ', wpOAuth.token());

console.log ('ready');

$('body').prepend('<p>wooooooooooooooo</p>');

// [Exception... "An invalid or illegal string was specified"  code: "12" nsresult: "0x8053000c (SyntaxError)"  location: "<unknown>"]
