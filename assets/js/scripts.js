var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
const lastOpenedKey = 'lastOpenedParent';

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
