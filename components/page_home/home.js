class Home extends SPA {
  html() {
    return /*html*/`
    <div id="home" class="centered">
      <div class="centered">
        <div>${this._component('Navbar')}</div>
      </div>
        <img src='images/selfie.jpg' alt='selfie'>
        <div class='portfolio centered' spaPage="Portfolio"><u>portfolio of projects</u></div>
        <div>${this._component('Footer')}</div>
        </div>
  `
  }
}