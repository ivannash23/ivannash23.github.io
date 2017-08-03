var trabalhos = [{
        "name": "Random Quote",
        "picture": "http://s33.postimg.org/nf79gt6mn/quotemachine.jpg",
        "description": "Creates a random quote from a array and gives you the option to upload on twitter",
        "url": "http://codepen.io/ivannash23/full/gMYWXg/"
    },
    {
        "name": "Generally assembled",
        "picture": "assets/imgs/assembled.jpg",
        "description": "A full-stack search application built with Ruby on Rails by Weston Dombroski, Anton Pugach, and Ivan Miranda. Using this site, General Assembly students can search and view the contents of Repositories and comment on them.",
        "url": "https://assembled.herokuapp.com/"

    }, {
        "name": "Wikipedia Viewer",
        "picture": "http://s33.postimg.org/m7oqaur4f/wikiview.jpg",
        "description": "Wikipedia search displayed on the page or randomly select a wikipedia article",
        "url": "http://codepen.io/ivannash23/full/LZVBwG/"
    }, {
        "name": "Vagabond",
        "picture": "assets/imgs/vagabond.png",
        "description": "Sign in to uncover a community of foodies posting comments and feedback on cities they've been (pre-listed on the website) to and the food around them",
        "url": "https://vagabond-irk.herokuapp.com/"
    }, {
        "name": "Email Builder",
        "picture": "assets/imgs/email.png",
        "description": "With drag and drop functionallity you can create emails for different campaings in a fast and simple way",
        "url": "http://email.adcdm.com/beta-1-0/"

    }, {
        "name": "Carship Race",
        "picture": "https://raw.githubusercontent.com/ivannash23/twoAmigos/master/public/images/screen_shot_2017-02-21b.png",
        "description": "using HTML/CSS/JS elements that are communicating with and Express based Node.js framework, that is in turn interacting with a MongoDB database utilizing Mongoose library to store and manipulate persistent user created data.",
        "url": "https://carship-space-race.herokuapp.com/"
    }
];

var contact = [{
        "name": "Linkedin",
        "icon": "fa fa-linkedin-square fa-5x",
        "url": "https://www.linkedin.com/in/ivan-miranda-710203133"
    },
    {
        "name": "Gmail",
        "icon": "fa fa-google-plus-square fa-5x",
        "url": "mailto:ivannash23@gmail.com"
    }, {
        "name": "GitHub",
        "icon": "fa fa-github-square fa-5x",
        "url": "https://github.com/ivannash23"
    }, {
        "name": "CodePen",
        "icon": "fa fa-codepen fa-5x",
        "url": "http://codepen.io/ivannash23/"
    }
];

$(".work-a").click(function() {

    $(".row").empty();

    for (var i = 0; i < trabalhos.length; i++) {
        var name = trabalhos[i].name;
        var picture = trabalhos[i].picture;
        var description = trabalhos[i].description;
        var url = trabalhos[i].url;

        $(".row").append(`<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><div class="thumbnail"><div class="caption"><h3><a href="${url}">${name}</a></h3><img class="img-responsive" src="${picture}" alt="${name}"><p>${description}</p></div></div></div>`);

    }
});

$(".contact-a").click(function() {

    $(".row").empty();

    for (var i = 0; i < contact.length; i++) {
        var name = contact[i].name;
        var icon = contact[i].icon;
        var url = contact[i].url;

        $(".row").append(`<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3"><a href="${url}"><i class="${icon}" aria-hidden="true"></a></i><h4>${name}</h4></div>`)

    }
});