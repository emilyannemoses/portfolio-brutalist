spa.page.enter = (META)=>{
    META.enterPage = true
    spa.buildPage(META).innerHTML += `
      <div class='enter'>
        <div class='button' onClick='spa.setPage("home")'>ENTER</div>
      </div>
    `
}