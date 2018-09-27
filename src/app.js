
var helloWorldTemplate = require("./templates/hello-world.dust");
//require("./templates/partial-template.dust");

var dust = require("dustjs");
var $ = require("jquery");

// convert the asynchronous dust.render function to a Promise
function renderP(template, data){
	return new Promise((resolve,reject) => {
	  dust.render(template, data, function(err, html){
	    if(err){
	      reject(err);
	    } else {
	      resolve(html);
	    }
	  });
	});
}

 // When th page is loaded
$(function() {

	renderP(helloWorldTemplate, {name: "world"})
		.then( html => {
			console.log(html);
			$('#greeting').html(html);
		});

	console.log("hello world");

});