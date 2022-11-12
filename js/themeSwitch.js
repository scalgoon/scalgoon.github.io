let ambient = document.getElementById('ambient');

let dark = document.getElementById('dark');

ambient.addEventListener('click', () => {

    let min = 0, max = 359;

    let randomHue = Math.round(Math.random() * (max - min) + min);

    let cssRoot = document.documentElement;

    cssRoot.style.setProperty('--darkColor', `hsl(${randomHue}, 72%, 8%)`);

    cssRoot.style.setProperty('--lightColor', `hsl(${randomHue}, 72%, 68%)`);

    cssRoot.style.setProperty('--siteBackgroundPc', "linear-gradient(to right, var(--darkColor), var(--lightColor))");

    cssRoot.style.setProperty('--siteBackgroundMobile', "linear-gradient(to top, var(--darkColor), var(--lightColor))");

    localStorage.setItem("SiteTheme", 2);
    
})

dark.addEventListener('click', () => {

    let cssRoot = document.documentElement;

    cssRoot.style.setProperty('--siteBackgroundPc', "none");

    cssRoot.style.setProperty('--siteBackgroundMobile', "none");

    localStorage.setItem("SiteTheme", 1);

})