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

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ],
    displayWork: function() {
        this.jobs.forEach((job) => {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDates.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        })
   //TODO replace with foreach
//        for(job in this.jobs) {
//            $("#workExperience").append(HTMLworkStart);
//            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//            var formattedEmployerTitle = formattedEmployer + formattedTitle;
//            $(".work-entry:last").append(formattedEmployerTitle);
//            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//            $(".work-entry:last").append(formattedDates);
//            var formattedDescription = HTMLworkDates.replace("%data%", work.jobs[job].description);
//            $(".work-entry:last").append(formattedDescription);
//        } 
    }
};

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data", bio.skills[0]);
    $("#skills").append(formattedSkill);
}



work.displayWork();


//work
//work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.
//
//projects
//projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.