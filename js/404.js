const ThemeToUse = localStorage.getItem("SiteTheme");

if(ThemeToUse == 1) {
  document.body.classList.add("darkTheme"); 
} else if (ThemeToUse == 2) {
  document.body.classList.remove("darkTheme"); 
}
