spa.page.enter = (META)=>{
    META.enterPage = true
    spa.buildPage(META).innerHTML += `
    <div class='boring'>
      <a class='boringButton' href="https://eamoses.github.io/index/" target="_blank">WHY WOULD YOU GO HERE...</a>
    </div>
    <div class='enter'>
      <div class='button' onClick='spa.setPage("home")'><u>...WHEN YOU COULD GO HERE</u></div>
    </div>
    `
}