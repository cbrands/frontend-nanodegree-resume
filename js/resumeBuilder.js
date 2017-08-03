//Define bio object
var bio = {
    "name" : "Charles Brands",
    "role" : "Java Developer",
    "contacts" : {
        "mobile" : "650-555-5555",
        "email" : "john@example.com",
        "github" : "johndoe",
        "location" : "Nieuwegein, NL",
        "twitter": "#birdie"
    },
    "welcomeMessage" : "Welcome to my resume site.",
    "skills" : ["Physics", "Java development", "SQL development", "Windsurfing"],
    "bioPic" : "images/fry.jpg",
    
    displayBio: function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail); 
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);
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
            "name": "Virginia Tech",
            "location": "Blacksburg, VA, US",
            "degree": "PhD",
            "major": ["Physics"],
            "dates": 2003,
            "url": "https://www.phys.vt.edu/"
        },
        {
            "name": "University of Virginia",
            "location": "Charlottesville, VA, US",
            "degree": "Masters",
            "major": ["Physics"],
            "dates": 1997,
            "url": "http://www.phys.virginia.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Webdeveloper",
            "school": "Udacity",
            "dates": 2017,
            "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
        },
        {
            "title": "React Nano degree",
            "school": "Udacity",
            "dates": 2017,
            "url": "https://classroom.udacity.com/nanodegrees/nd019/syllabus/core-curriculum"
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
            "employer": "Rabobank",
            "title": "Java Developer",
            "location": "Utrecht, NL",
            "dates": "Feb 2017 - Current",
            "description": "Java developer. Writing java programs and doing other java stuff. Ignoring impossible demands from managers. "
        },
        {
            "employer": "SSC",
            "title": "Java Developer",
            "location": "Den Haag, NL",
            "dates": "April 2016 - Jan 2017",
            "description": "Java developer. Writing java programs and doing other java stuff. Ignoring impossible demands from managers. "
        },
        {
            "employer": "UWV",
            "title": "Java Developer",
            "location": "Amsterdam, NL",
            "dates": "May 2014 - March 2016",
            "description": "Java developer. Writing java programs and doing other java stuff. Ignoring impossible demands from managers. "
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
            ]
        },
        {
            "title": "Portfolio site",
            "dates": 2017,
            "description": "My portfolio site, showing of the Netherlands",
            "images": [
                "images/portfolio.png"
            ]
        },
        {
            "title": "Animal card",
            "dates": 2017,
            "description": "An animal card of cats. Cats are cool.",
            "images": [
                "images/catcard.png"
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
            if(aProject.images.length > 0) {
                aProject.images.forEach((imageUrl) => {
                    var imageCode = HTMLprojectImage.replace("%data%", imageUrl);
                    $(".project-entry:last").append(imageCode);
                });
            }
        });
    }
};

//Display everything
bio.displayBio();
education.displayEducation();
work.displayWork();
project.displayProject();
$("#mapDiv").append(googleMap);