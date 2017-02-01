
var bio = {
	"name": "Matthew G. Thorry",
	"role": "Current Educator, Aspiring Web Developer",
	"contacts": { 
		"mobile": "646.757.0561",
		"email": "mthorry@gmail.com",
		"github": "mthorry",
		"location": "New York City",
		},
	"bioPic": "images/profile.png",
	"welcomeMessage": "Welcome to my resume! Here you can see what I have been working on",
	"skills": [
		"JavaScript", "HTML", "educating", "leading",
		],
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));


$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

};



var work = {
"jobs": [
	{
	"title" : "Science Teacher",
	"employer" : "New York City Department of Education",
	"dates" : "September 2010 - Present",
	"location" : "New York City, NY",
	"description" : "I have taught science in grades 8 through 12 in my six and a half years as an educator. I have mostly taught Earth Science, but also Applied Physics and Chemistry and 8th Grade General Science.",
	},
	{
	"title" : "Master Teacher of Science",
	"employer" : "Math for America",
	"dates" : "September 2014 - Present",
	"location" : "New York City, NY",
	"description" : "Awarded to outstanding teachers of math and science in New York City public schools. Master teachers lead and take part in professional development as well as receive an additional stipend.",
	},
	{
	"title" : "Lab Aide",
	"employer" : "University of Arizona",
	"dates" : "August 2009 - December 2009",
	"location" : "Tucson, AZ",
	"description" : "Helped reconstruct paleo-climate data to better understand the El Niño Southern Oscillation.",
	}
	]
};

function displayWork() {
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle)

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
 }
};
	displayWork();

var projects = {
 "projects": [
  	{
	"title": "Bootcamp Prep, Flatiron School",
	"dates": "January 2017 - Present",
	"description": "Learning JavaScript basics and preparing to become a full time web developer :)",
	"images": "images/fry.jpg",
	}, 
	{
	"title": "JavaScript Basics Résumé, Udacity",
	"dates": "January 2017",
	"description": "Creating an interactive résumé. THIS interactive résumé!",
	"images": "images/fry.jpg",
	}
  ]
};

projects.display = function() {
	for (project in projects.projects) {	
		$("#projects").append(HTMLprojectStart);

	 var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	 $(".project-entry:last").append(formattedTitle);

	 var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	 $(".project-entry:last").append(formattedDates);

	 var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	 $(".project-entry:last").append(formattedDescription);
/*
	var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
	 $(".project-entry:last").append(formattedImage);
*/
	 		
	 	
	}
};
	projects.display();

	$("#mapDiv").append(googleMap);


var education = {
	"schools": [
		{
			"name": "University of Arizona",
			"degree": " Bachelor of Science, cum laude",
			"dates": "2006 - 2010",
			"major": "Earth Science Education",
			"location": "Tucson, AZ",
			"url": "http://www.geo.arizona.edu/",
		},
		{
			"name": "City College, City University of New York",
			"degree": " Master of Science",
			"dates": "2013 - 2015",
			"major": "Teaching English to Speakers of Other Languages",
			"location": "New York, NY",
			"url": "www.ccny.cuny.edu",
		}
	],
	"onlineClasses": [
		{
		"title": "Bootcamp Prep",
		"school": "Flatiron School",
		"dates": "January 2017 - Present",
		"url": " ",
		},
		{
		"title": "JavaScript Crash Course",
		"school": "Udacity",
		"dates": "January 2017",
		"url": " ",
		}
	]
};

education.display = function() {
	for (school in education.schools) {	
		$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
	 $(".education-entry:last").append(formattedSchoolName);

 	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	 $(".education-entry:last").append(formattedSchoolDegree);
 	
 	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	 $(".education-entry:last").append(formattedSchoolDates);

 	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	 $(".education-entry:last").append(formattedSchoolLocation);

 	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	 $(".education-entry:last").append(formattedSchoolMajor);

	}


if(education.onlineClasses.length > 0) {
	$("#education").append(HTMLonlineClasses);
	for(i in education.onlineClasses) {				
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title).replace("#", education.onlineClasses[i].url);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].dates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[i].url).replace("#", education.onlineClasses[i].url);

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
};

	education.display();



