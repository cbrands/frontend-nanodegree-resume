var name = "Charles Brands";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Java Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);