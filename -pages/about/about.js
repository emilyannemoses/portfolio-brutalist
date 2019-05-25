spa.page.about = (META) => {
    spa.buildPage(META).innerHTML += `
    <nav class='aboutNav centered'>
      <span onClick='spa.setPage("home")' class='home-link'><u>home</u></span>
      <span onClick='spa.setPage("contact")' class='contact-link'><u>contact</u></span>
      <span onClick='spa.setPage("about")' class='about-link'><u>about</u></span>
      <span onClick="openResume('./resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
    </nav>
    <div class="contain">
    <div class="centered some-margin">
        <span>I</span>'m Emily, a software engineer and human. You may have seen the entrance to my site <a href="../../index.html" class="about-link">here.</a> Feel free to peruse both portfolios.
    </div>
    <div class="centered some-margin">
        <span>O</span>riginally from Massachusetts, I spent 11 years in the San Francisco Bay Area, specifically Oakland. That's where I learned to code and got my first jobs. After a few years I decided to move to Austin, Texas for a change of pace. I love Austin! 
    </div>
    <div class="centered some-margin">
        <span>I</span>'m a world traveler. I've lived in both Egypt and Guatemala, and my last trip was to the beautiful island of Cuba. My dream trip is to take a few weeks on the Trans Siberian railway through Russia, Mongolia and China.
    </div>
    <div class="centered some-margin">
        <span>I</span>'m not a designer, but I do consider myself a tinkerer. I love diving into a project or technology and just "figuring it out" as I go. You'll find me reaching out to my web developer friends on <a href="https://twitter.com/emilyannemoses" class="about-link">Twitter</a> for tips and tricks. Connect with me and let's have coffee! I'm always up for some good tech chat ☕️
    </div>
    <div class="centered some-margin">
        <span>T</span>his version of my online portfolio is created with the <a href="https://brutalistwebsites.com/" class="about-link">brutalist</a> style technique in mind. I'd love to know <a href="../form/form.html" class="about-link">what you think.</a>
    </div>
</div>
    ` 
}
const openResume = (urlPath) => {
  window.open(urlPath);
}