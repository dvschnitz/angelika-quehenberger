var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
const lastOpenedKey = 'lastOpenedParent';

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        slideshow();
    }
});

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');

    var lastOpenedNodeId = localStorage.getItem(lastOpenedKey);
    if (lastOpenedNodeId) {
        toggleSubMenu(lastOpenedNodeId);
    }
}

toggleSubMenu = function(id) {
    var childrenToToggle = document.querySelectorAll('.child-' + id);
    localStorage.setItem(lastOpenedKey, id);
    for (let i = 0; i < childrenToToggle.length; i++) {
        if (childrenToToggle[i].style.display === 'none') {
            childrenToToggle[i].style.display = "block";
        } else {
            childrenToToggle[i].style.display = "none";
        }
    }
}

slideshow = function() {
    var containsSlideShow = document.querySelectorAll('#image-2');
    if (containsSlideShow && containsSlideShow.length > 0) {
        var elements = document.querySelectorAll('.image-slideshow');
        var numberOfElements = elements.length;
        var previousElement;
        for (var i = 0; i < 100; i++) {
            (function(ind) {
                setTimeout(function(){
                    if (previousElement) {
                        previousElement.style.opacity = 0;
                        setTimeout(() =>{
                            previousElement.style.display = 'none';
                        }, 200);
                    }
                    
                    setTimeout(() =>{
                        previousElement = elements[ind % numberOfElements];
                        previousElement.style.opacity = 1;
                        previousElement.style.display = 'inline';
                    }, 200);

                }, 1000 + (5000 * ind));
            })(i);
        }
    }
}
