class Mobile extends SPA {
    html() {
        return /*html*/`
        <div id="containerContainer">
            <div id="codeContainer">
            <div class="wholepage">
            <div class="linkContainer centered"> 
            <div>
            EMILY'S <a href="https://github.com/eamoses" class="centered large-font-size no-padding" target="_blank"> GITHUB</a>
            </div>
            <div class="image">
            <a href="https://eamoses.github.io/widget-dashboard/" target="_blank">
            widget dashboard</a>
            </div>
            <div class="image">
            <a href="https://eamoses.github.io/index/projects/drag-n-drop/index.html" target="_blank">
            drag 'n drop photo website</a>
            </div>
            <div class="image">
            <a href="https://graph-sense.herokuapp.com/" target="_blank">
            graphsense</a>
            </div>
            <div class="image">
            <a href="https://github.com/eamoses/run-tracker-python" target="_blank">
            python run tracker</a>
            </div>
            <div class="image">
            <a href="https://digestibleplastic.com/" target="_blank">
            digestible plastic</a>
            </div>
            </div>
            </div>
            </div>
            <div id="codePenContainer">
            <div class="codepen centered">EMILY'S <a href="https://codepen.io/emilyannemoses/" class="centered large-font-size no-padding" target="_blank"> CODEPEN</a>
            <iframe height="450" style="width: 100%;margin-top: 25px;" scrolling="no" title="HTML5 AudioAPI Example using vanilla JavaScript" src="//codepen.io/emilyannemoses/embed/QoyGZo/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/emilyannemoses/pen/QoyGZo/'>HTML5 AudioAPI Example using vanilla JavaScript</a> by Emily Anne Moses
            (<a href='https://codepen.io/emilyannemoses'>@emilyannemoses</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
            </div>
            </div>
            <div id="aboutContainer">
            <div class="contain">
            <div class="some-margin">
                <span class="large">I</span>'m Emily, a software engineer and human.
            </div>
            <div class="some-margin">
                <span class="large">O</span>riginally from Massachusetts, I moved to the San Francisco Bay Area to escape the snow ☃️. That's when I began learning the art of programming and working as a developer. I've since decided to move to Austin, Texas for a change of pace. I love Austin! 🌵
            </div>
            <div class="some-margin">
                <span class="large">I</span>'m a world traveler. I've lived in both Egypt 🇪🇬 and Guatemala 🇬🇹, and my last trip was to the beautiful island of Cuba 🇨🇺. My next trip will be to take a few weeks on the Trans Siberian railway through Russia 🇷🇺, Mongolia 🇲🇳 and China 🇨🇳.
            </div>
            <div class="some-margin">
                <span class="large">I</span> consider myself a tinkerer. I love diving into a project or technology and just "figuring it out" as I go. You'll find me reaching out to my web developer friends on <a href="https://twitter.com/emilyannemoses" class="about-link" target="_blank">Twitter</a> for tips and tricks. Connect with me and let's have coffee! I'm always up for some good chat ☕️. I'm also an artist 👩🏽‍🎨 and woodworker, and you can see some of my work on <a href="https://www.instagram.com/emilyannemoses" class="about-link" target="_blank">Instagram</a>.
            </div>
            <div class="some-margin">
                <span class="large">T</span>his version of my online portfolio is created with the <a href="https://brutalistwebsites.com/" target="_blank" class="about-link">brutalist</a> style technique in mind. I'd love to know what you think.</span>
            </div>
            </div>
            </div>
            <div id="formContainer">
            <div class='formContainer'>
            <form method="POST" action="https://formspree.io/eamoses@gmail.com">
            <fieldset>
            SEND ME A MESSAGE:
                <label for="name">NAME</label>
                <input type="text" id="name" name="user_name">
                <label for="email">EMAIL</label>
                <input type="email" id="mail" name="user_email">
            </fieldset>
            <fieldset>
                <label for="bio">MESSAGE</label>
                <textarea id="bio" name="user_bio"></textarea>
            </fieldset>
            <button type="submit" class="submit">SEND</button>
            <button type="reset" class="reset">RESET</button>
          </form>
          </div>
            </div>
        </div>
      `
    }
}