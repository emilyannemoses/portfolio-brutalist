spa.page.home = (META)=>{
    spa.buildPage(META).innerHTML += `
    <nav class='homeNav centered'>
      <span><u>home</u></span>
      <span onClick='spa.setPage("contact")'><u>contact</u></span>
      <span onClick='spa.setPage("about")'><u>about</u></span>
      <span onClick="openResume('../resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
    </nav>
    <div class='home centered'>
          <img src='../images/selfie.jpg' alt='selfie'>
      <div onClick='spa.setPage("portfolio")' class='portfolio'><u>portfolio of projects</u></div>
    </div>
    ` 
}