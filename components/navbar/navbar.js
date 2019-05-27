SPA.prototype.navbar = {
    openResume: function(url) {
        window.open(url);
    },
    html: function(){
      return /*html*/`
        <nav id="navbar">
            <span spaPage="home"><u>home</u></span>
            <span spaPage="contact"><u>contact</u></span>
            <span spaPage="about"><u>about</u></span>
            <span thisClick="openResume('../resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
        </nav>
      `
    }  
}