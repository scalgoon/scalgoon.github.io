const ThemeToUse = localStorage.getItem("SiteTheme");

if(ThemeToUse == 1) {
  document.body.classList.add("darkTheme"); 
} else if (ThemeToUse == 2) {
  document.body.classList.remove("darkTheme"); 
}

  //THEME
var sun = document.getElementById('sun');

var moon = document.getElementById('moon');

sun.addEventListener('click', () => {
 document.body.classList.remove("darkTheme");
//  console.log("SUN")

localStorage.setItem("SiteTheme", 2);
}) 

moon.addEventListener('click', () => {
  document.body.classList.add("darkTheme");  
  // console.log("MOON")

  localStorage.setItem("SiteTheme", 1);
})