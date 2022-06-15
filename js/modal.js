var Pmodal = document.getElementById("PModal");
var Smodal = document.getElementById("SModal");
var Cmodal = document.getElementById("CModal");
    
var project = document.getElementById("ProjectBtn");
var skill = document.getElementById("SkillsBtn");
var contact = document.getElementById("ContactBtn");

var span = document.getElementsByClassName("close")[0];

project.onclick = function() {
  Pmodal.style.display = "block";
}

skill.onclick = function() {
    Smodal.style.display = "block";
}

contact.onclick = function() {
    Cmodal.style.display = "block";
} 

span.onclick = function() {
  Pmodal.style.display = "none";
  Smodal.style.display = "none";
  Cmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == Pmodal) {
    Pmodal.style.display = "none";
  }

  if (event.target == Smodal) {
    Smodal.style.display = "none";
  }

  if (event.target == Cmodal) {
    Cmodal.style.display = "none";
  }
}