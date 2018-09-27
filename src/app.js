
var helloWorldTemplate = require("./templates/hello-world.dust");

var dust = require("dustjs");
var $ = require("jquery");

 // When th page is loaded
$(function() {

	dust.render(helloWorldTemplate, {name: "world"}, function(err, html){
	    if(err){
	      console.err(err);
	    } else {
	      $('#greeting').html(html);
	    }
	});

});