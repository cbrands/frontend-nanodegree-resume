//var name = "Charles Brands";
//var formattedName = HTMLheaderName.replace("%data%", name);
//
//var role = "Java Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
    "name" : "John Doe",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "650-555-5555",
        "email" : "john@example.com",
        "github" : "johndoe",
        "location" : "San Fransisco",
    },
    "welcomeMessage" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "skills" : ["awesomeness", "deleivering things", "cryogenic sleep", "saving the universe"],
    "bioPic" : "images/fry.jpg"
};

var education = {
    "schools": [
        {
            "name": "Eckerd College",
            "location": "Saint Petersburg, FL, US",
            "degree": "BA",
            "major": ["CompSci", "French"],
            "dates": 2003,
            "url": "http://www.example.com"
        },
        {
            "name": "Nova University",
            "location": "Fort Lauderdale, FL, US",
            "degree": "Masters",
            "major": ["CompSci"],
            "dates": 2013,
            "url": "http://www.example.com"
        }
    ],
    "onlinecourses": [
        {
            "title": "Javascript syntax",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://www.example.com"
        }
    ]
};

//var work : [
//    
//]
//work
//work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.
//
//projects
//projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.