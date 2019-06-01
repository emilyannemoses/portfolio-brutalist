class About extends SPA {
  html() {
    return /*html*/`
    <div id="about">
      <div>${this._component('Navbar')}</div>
      <div class="contain">
        <div class="some-margin">
            <span class="large">I</span>'m Emily, a software engineer and human. Hopefully you entered my site via <a href="../../index.html" class="about-link">here</a> to get the full experience.
        </div>
        <div class="some-margin">
            <span class="large">O</span>riginally from Massachusetts, I moved to the San Francisco Bay Area to escape the snow ☃️. That's when I began learning the art of programming and working as a developer. I've since decided to move to Austin, Texas for a change of pace. I love Austin! 🌵
        </div>
        <div class="some-margin">
            <span class="large">I</span>'m a world traveler. I've lived in both Egypt 🇪🇬 and Guatemala 🇬🇹, and my last trip was to the beautiful island of Cuba 🇨🇺.
        </div>
        <div class="some-margin">
            <span class="large">I</span> consider myself a tinkerer. I love diving into a project or technology and just "figuring it out" as I go. You'll find me reaching out to my web developer friends on <a href="https://twitter.com/emilyannemoses" class="about-link" target="_blank">Twitter</a> for tips and tricks. Connect with me and let's have coffee! I'm always up for a good chat ☕️. I'm also an artist 👩🏽‍🎨, woodworker, and nature lover. View my work on <a href="https://www.instagram.com/emilyannemoses" class="about-link" target="_blank">Instagram</a>.
        </div>
        <div class="some-margin">
            <span class="large">T</span>his version of my online portfolio is created with the <a href="https://brutalistwebsites.com/" target="_blank" class="about-link">brutalist</a> style technique in mind. I'd love to know<span spaPage="contact" style="color:#A6B847;cursor:pointer;padding:5px!important;font-size:30px;"><u>what you think.</u></span>
        </div>
        </div>
    </div>
  `
  }
}