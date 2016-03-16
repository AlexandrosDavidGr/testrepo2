function getData(callBack) {
	$.ajax({
		//async: false,
		type: 'POST',
        dataType: 'jsonp',
		url:"http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=ny97sdcpqetasj8a4v2na8va&&q=gone with",  
		success:function(data) {
		    myRtnA = data;
			return callBack( myRtnA ); 
      }
   });
}

/*
function getData2() {
	$.ajax({
		async: false,
		type: 'POST',
        dataType: 'jsonp',
		url:"http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=ny97sdcpqetasj8a4v2na8va&&q=gone with",  
		success:function(data) {
			return data.total;
			//$(".yupi").append(data.total);
      }
   });
}
*/


$(document).ready(function(){
	getData(function(myRtn) {
	
	
		console.log(myRtn);
		
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);
		//var context = {title: "My New Post", body: "This is my first post!"};
		var html = $("body").append(template(myRtn));
	});
	
	
});


Handlebars.registerHelper('moviess', function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + items[i].id + "</li>";
  }

  return out + "</ul>";
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

