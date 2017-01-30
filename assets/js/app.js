var trabalhos = [{
	"name" : "Random Quote",
	"picture" : "http://s33.postimg.org/nf79gt6mn/quotemachine.jpg",
	"description": "Creates a random quote from a array and gives you the option to upload on twitter",
	"url" : "http://codepen.io/ivannash23/full/gMYWXg/"
},
{
	"name" : "Wikipedia Viewer",
	"picture" : "http://s33.postimg.org/m7oqaur4f/wikiview.jpg",
	"description" : "Wikipedia search displayed on the page or randomly select a wikipedia article",
	"url" : "http://codepen.io/ivannash23/full/LZVBwG/"
},{
	"name":"Robin Williams Tribute",
	"picture":"https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/573be1ced6865d4213cb84c6/screenshot.png",
	"description":"A static website in tribute of Robin Williams",
	"url":"http://robinwilliams.bitballoon.com/"
}];

var contact = [{
	"name" : "Linkedin",
	"icon" : "fa fa-linkedin-square fa-5x",
	"url" : "https://www.linkedin.com/in/ivan-miranda-710203133"
},
{
	"name" : "Gmail",
	"icon" : "fa fa-google-plus-square fa-5x",
	"url" : "mailto:ivannash23@gmail.com"
},{
	"name" : "GitHub",
	"icon" : "fa fa-github-square fa-5x",
	"url" : "https://github.com/ivannash23"
},{
	"name" : "CodePen",
	"icon" : "fa fa-codepen fa-5x",
	"url" : "http://codepen.io/ivannash23/"
}];

$(".work-a").click(function() {

	$(".row").empty();

	for(var i =0; i< trabalhos.length; i++){
		var name = trabalhos[i].name;
		var picture = trabalhos[i].picture;
		var description = trabalhos[i].description;
		var url = trabalhos[i].url;

		$(".row").append(`<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><div class="thumbnail"><div class="caption"><h3><a href="${url}">${name}</a></h3><img class="img-responsive" src="${picture}" alt="${name}"><p>${description}</p></div></div></div>`);

	}
});

$(".contact-a").click(function() {

	$(".row").empty();

	for(var i =0; i< contact.length; i++){
		var name = contact[i].name;
		var icon = contact[i].icon;
		var url = contact[i].url;

	$(".row").append(`<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3"><a href="${url}"><i class="${icon}" aria-hidden="true"></a></i><h4>${name}</h4></div>`)

	}
});





