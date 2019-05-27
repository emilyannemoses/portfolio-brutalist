SPA.prototype.contact = {
    html: function(){
      return /*html*/`
        <div id="contact" class="centered">
            <div>${this.spa._component('navbar')}</div>
            <div class='formContainer'>
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
          </div>
      `
    }
  }