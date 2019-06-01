class Footer extends SPA {
    html() {
        return /*html*/`
            <div id="footer"> &copy; ${setYear()} <a href="https://github.com/eamoses" target="_blank" id="link"> Emily Anne Moses </a> </div>
        `
    }
}

function setYear() {
    const date = new Date;
    return date.getFullYear();
}