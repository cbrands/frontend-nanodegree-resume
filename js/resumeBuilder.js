//Define bio object
var bio = {
    "name" : "John Doe",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "650-555-5555",
        "email" : "john@example.com",
        "github" : "johndoe",
        "location" : "San Fransisco",
        "twitter": "#birdie",
        "bioPic": "images/fry.jpg"
    },
    "welcomeMessage" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "skills" : ["awesomeness", "deleivering things", "cryogenic sleep", "saving the universe"],
    "bioPic" : "images/fry.jpg",
    
    displayBio: function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedImage = HTMLbioPic.replace("%data%", this.bioPic);
        $("#header").append(formattedImage);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedMessage);
        if(this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach((skill) => {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }

    }
};

//Define education object
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
    "onlineCourses": [
        {
            "title": "Javascript syntax",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://www.example.com"
        },
        {
            "title": "Javascript syntax",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://www.example.com"
        }
    ],
    displayEducation: function() {
        $("#education").append(HTMLschoolStart);
        this.schools.forEach((school) => {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach((course) => {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            $(".education-entry:last").append(formattedOnlineTitle);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedOnlineSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedUrl);
        });
    }
};

//Define work object
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
    displayWork: function () {
        this.jobs.forEach((job) => {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

//Define project object
var project = {
    "projects": [
        {
            "title": "Resume site",
            "dates": 2017,
            "description": "Site that shows what a good fellow I am.",
            "images": [
                "http://www.example.com"
            ]
        },
        {
            "title": "Portfolio site",
            "dates": 2017,
            "description": "My portfolio site, showing of the Netherlands",
            "images": [
                "http://www.example.com"
            ]
        },
        {
            "title": "Animal card",
            "dates": 2017,
            "description": "An animal card of cats. Cats are cool.",
            "images": [
                "http://www.example.com"
            ]
        }
    ], 
    displayProject: function() {
        this.projects.forEach((aProject) => {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", aProject.title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", aProject.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", aProject.description);
            $(".project-entry:last").append(formattedDescription);
        });
    }
};

//Display everything
bio.displayBio();
education.displayEducation();
work.displayWork();
project.displayProject();