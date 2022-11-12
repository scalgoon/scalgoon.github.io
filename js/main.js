const ThemeToUse = localStorage.getItem("SiteTheme");

if(ThemeToUse == 1) {

    let cssRoot = document.documentElement;

    cssRoot.style.setProperty('--siteBackgroundPc', "none");
    
    cssRoot.style.setProperty('--siteBackgroundMobile', "none");

} else if (ThemeToUse == 2) {

    let min = 0, max = 359;

    let randomHue = Math.round(Math.random() * (max - min) + min);
    
    let cssRoot = document.documentElement;
    
    cssRoot.style.setProperty('--darkColor', `hsl(${randomHue}, 72%, 8%)`);
    
    cssRoot.style.setProperty('--lightColor', `hsl(${randomHue}, 72%, 68%)`);

} else if (!ThemeToUse) {

    let min = 0, max = 359;

    let randomHue = Math.round(Math.random() * (max - min) + min);
    
    let cssRoot = document.documentElement;
    
    cssRoot.style.setProperty('--darkColor', `hsl(${randomHue}, 72%, 8%)`);
    
    cssRoot.style.setProperty('--lightColor', `hsl(${randomHue}, 72%, 68%)`);

}
