spa.page.contact = (META)=>{
    spa.buildPage(META).innerHTML += `
    <nav class='contactNav centered'>
      <span onClick='spa.setPage("home")'><u>home</u></span>
      <span onClick='spa.setPage("contact")'><u>contact</u></span>
      <span onClick='spa.setPage("about")'><u>about</u></span>
      <span onClick="openResume('../resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
    </nav>
    <div class='contact'>
    MESSAGE ME <span class="float-right" onClick='spa.setPage("form")'><u>send message</u></span>
    <br>
    SNAIL MAIL<span class="float-right">🐌✉️</span>
    <br>
    CARRIER PIGEON<span class="float-right"><a class="padding-right" href="https://flypigeon.co/" target="_blank">🐦</a></span>
    <br>
    TEXT ME<span class="float-right">📱</span>
  </div>
    ` 
}