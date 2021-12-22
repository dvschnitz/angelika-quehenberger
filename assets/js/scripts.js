var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

toggleSubMenu = function(id) {
    var childrenToToggle = document.querySelectorAll('.child-' + id);
    console.log('name', name, childrenToToggle);
    for (let i = 0; i < childrenToToggle.length; i++) {
        if (childrenToToggle[i].style.display === 'none') {
            childrenToToggle[i].style.display = "block";
        } else {
            childrenToToggle[i].style.display = "none";
        }
    }
}
