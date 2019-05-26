spa.page.enter = (META)=>{
    META.enterPage = true
    spa.buildPage(META).innerHTML += `
      <iframe src="https://eamoses.github.io/index/" height="100%" width="50%" style="top:0;left:0;position:absolute;cursor:pointer;"></iframe>
    <div class='enter'>
      <div class='button' onClick='spa.setPage("home")'>OR ENTER HERE</div>
    </div>
    `
}