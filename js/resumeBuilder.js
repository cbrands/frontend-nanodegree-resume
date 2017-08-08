//Define bio object
var bio = {
    "name": "Charles Brands",
    "role": "Java Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "#birdie",
        "location": "Nieuwegein, NL"
    },
    "welcomeMessage": "Welcome to my resume site.",
    "skills": ["Physics", "Java development", "SQL development", "Windsurfing"],
    "biopic": "images/fry.jpg",

    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedImage, formattedMessage);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach((skill) => {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

//Define education object
var education = {
    "schools": [{
            "name": "Virginia Tech",
            "location": "Blacksburg, VA, US",
            "degree": "PhD",
            "majors": ["Physics"],
            "dates": "2017",
            "url": "https://www.phys.vt.edu/"
        },
        {
            "name": "University of Virginia",
            "location": "Charlottesville, VA, US",
            "degree": "Masters",
            "majors": ["Physics"],
            "dates": "2017",
            "url": "http://www.phys.virginia.edu/"
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Webdeveloper",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
        },
        {
            "title": "React Nano degree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://classroom.udacity.com/nanodegrees/nd019/syllabus/core-curriculum"
        }
    ],
    display: function() {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach((school) => {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedDates, formattedSchoolLocation, formattedSchoolMajors);
        });
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach((course) => {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedDates, formattedUrl);
        });
    }
};

//Define work object
var work = {
    "jobs": [{
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
    display: function() {
        work.jobs.forEach((job) => {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription);
        });
    }
};

//Define project object
var projects = {
    "projects": [{
            "title": "Resume site",
            "dates": "2017",
            "description": "Site that shows what a good fellow I am.",
            "images": []
        },
        {
            "title": "Portfolio site",
            "dates": "2017",
            "description": "My portfolio site, showing of the Netherlands",
            "images": [
                "images/portfolio.png"
            ]
        },
        {
            "title": "Animal card",
            "dates": "2017",
            "description": "An animal card of cats. Cats are cool.",
            "images": [
                "images/catcard.png"
            ]
        }
    ],
    display: function() {
        projects.projects.forEach((aProject) => {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", aProject.title);
            var formattedDates = HTMLprojectDates.replace("%data%", aProject.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", aProject.description);
            $(".project-entry:last").append(formattedProjectTitle, formattedDates, formattedDescription);
            if (aProject.images.length > 0) {
                aProject.images.forEach((imageUrl) => {
                    var imageCode = HTMLprojectImage.replace("%data%", imageUrl);
                    $(".project-entry:last").append(imageCode);
                });
            }
        });
    }
};

//Display everything
bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);