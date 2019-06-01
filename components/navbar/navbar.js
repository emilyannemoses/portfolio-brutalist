class Navbar extends SPA {
  html() {
    return /*html*/`
    <nav id="navbar">
        <span spaPage="Home"><u>home</u></span>
        <span spaPage="Contact"><u>contact</u></span>
        <span spaPage="About"><u>about</u></span>
        <span onClick="openResume('../resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
    </nav>
  `
  }
}

function openResume(url) {
  window.open(url);
}