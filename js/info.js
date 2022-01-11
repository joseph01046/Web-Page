var last_known_scroll_position = 0;
var ticking = false;
let goHome  = document.getElementById('floating');


function doSomething(scroll_pos) {
    if (scroll_pos > 1000){
        goHome.classList.remove('hidden')
    }
    else{goHome.classList.add('hidden')};
}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
    }
    ticking = true;
});