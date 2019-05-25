spa.page.about = (META) => {
    spa.buildPage(META).innerHTML += `
    <nav class='aboutNav centered'>
      <span onClick='spa.setPage("home")'><u>home</u></span>
      <span onClick='spa.setPage("contact")'><u>contact</u></span>
      <span onClick='spa.setPage("about")'><u>about</u></span>
      <span onClick="openResume('../resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
    </nav>
    <div class="contain centered">
        <div class="some-margin">
            <span class="large">I</span>'m Emily, a software engineer and human. Hopefully you entered my site via <a href="../../index.html" class="about-link">here</a> to get the full experience.
        </div>
        <div class="some-margin">
            <span class="large">O</span>riginally from Massachusetts, I spent 11 years in the San Francisco Bay Area, specifically Oakland. That's where I learned the art of programming and to work as a developer. After a few years I decided to move to Austin, Texas for a change of pace. I love Austin! 
        </div>
        <div class="some-margin">
            <span class="large">I</span>'m a world traveler. I've lived in both Egypt and Guatemala, and my last trip was to the beautiful island of Cuba. My dream trip is to take a few weeks on the Trans Siberian railway through Russia, Mongolia and China.
        </div>
        <div class="some-margin">
            <span class="large">I</span>'m not a designer, but I do consider myself a tinkerer. I love diving into a project or technology and just "figuring it out" as I go. You'll find me reaching out to my web developer friends on <a href="https://twitter.com/emilyannemoses" class="about-link" target="_blank">Twitter</a> for tips and tricks. Connect with me and let's have coffee! I'm always up for some good chat ☕️
        </div>
        <div class="some-margin">
            <span class="large">T</span>his version of my online portfolio is created with the <a href="https://brutalistwebsites.com/" target="_blank" class="about-link">brutalist</a> style technique in mind. I'd love to know<span onClick='spa.setPage("form")' style="color:#55198b;padding:5px!important;font-size:30px;"><u>what you think.</u></span>
        </div>
    </div>
    ` 
}
const openResume = (urlPath) => {
  window.open(urlPath);
}