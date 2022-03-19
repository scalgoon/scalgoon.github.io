
// MODAL FUNCTIONS

var modal = document.getElementById("myModal");
    
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const ThemeToUse = localStorage.getItem("SiteTheme");

if(ThemeToUse == 1) {
  document.body.classList.add("darkTheme"); 
} else if (ThemeToUse == 2) {
  document.body.classList.remove("darkTheme"); 
}

