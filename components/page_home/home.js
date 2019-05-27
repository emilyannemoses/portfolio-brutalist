SPA.prototype.home = {
    html: function(){
      return /*html*/`
        <div id="home" class="centered">
          <div class="centered">
            <div>${this.spa._component('navbar')}</div>
          </div>
            <img src='images/selfie.jpg' alt='selfie'>
            <div class='portfolio centered' spaPage="portfolio"><u>portfolio of projects</u></div>
        </div>
      `
    }
}