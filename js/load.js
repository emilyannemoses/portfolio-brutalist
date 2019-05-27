if(window.innerWidth > 767) {
    window.onload = ()=>{
        const spa =  new SPA()
        spa._start({ landingPage: 'enter' })
    }
} else {
    window.onload = ()=>{
        const spa =  new SPA()
        spa._start({ landingPage: 'mobile' })
    }
}