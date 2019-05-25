spa.page.home = (META)=>{
    spa.buildPage(META).innerHTML += `
    <nav class='nav centered'>
      <span onClick='spa.setPage("home")' class='home-link'><u>home</u></span>
      <span onClick='spa.setPage("contact")' class='contact-link'><u>contact</u></span>
      <span onClick='spa.setPage("about")' class='about-link'><u>about</u></span>
      <span onClick="openResume('./resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
    </nav>
    <div class='home centered'>
          <img src='https://i.imgur.com/pTiJpSr.jpg' alt='selfie'>
      <div onClick='spa.setPage("portfolio")' class='portfolio'><u>portfolio of projects</u></div>
    </div>
    ` 
}