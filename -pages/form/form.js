spa.page.form = (META)=>{
    spa.buildPage(META).innerHTML += `
    <nav class='formNav centered'>
      <span onClick='spa.setPage("home")' class='home-link'><u>home</u></span>
      <span onClick='spa.setPage("contact")' class='contact-link'><u>contact</u></span>
      <span onClick='spa.setPage("about")' class='about-link'><u>about</u></span>
      <span onClick="openResume('./resume/emilyannemoses-2019.pdf')"><u>resume</u></span>
    </nav>
    <form method="POST" action="https://formspree.io/eamoses@gmail.com">
    <fieldset>
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
    ` 
}