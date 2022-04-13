
/*

Fullscreen API - Web APIs
---------------------------
(Use of web api) 

*/

/* When user doubleclicks any of the pages the page will be displayed
in fullscreen mode */

const fullscreenButton = document.getElementById("fullscreen")

fullscreenButton.addEventListener("click", () => {
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e)
    })
});

