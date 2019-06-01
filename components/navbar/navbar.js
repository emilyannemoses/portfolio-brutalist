class Navbar extends SPA {
  html() {
    return /*html*/`
    <nav id="navbar">
        <span spaPage="home"><u>home</u></span>
        <span spaPage="contact"><u>contact</u></span>
        <span spaPage="about"><u>about</u></span>
        <span onClick="openResume('../resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
    </nav>
  `
  }
}

function openResume(url) {
  window.open(url);
}