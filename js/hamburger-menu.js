// Hamburger menu functionality will be added here

let burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav'),
    scrollPosition = 0;

// Create the wedge close area element
let wedgeCloseArea = document.createElement('div');
wedgeCloseArea.className = 'wedge-close-area';
document.body.appendChild(wedgeCloseArea);

function closeMenu() {
    // Closing menu - restore scroll position
    burger.classList.remove('is-open');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    
    // Remove fixed positioning and restore scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
}

function openMenu() {
    // Opening menu - store current scroll position
    scrollPosition = window.pageYOffset;
    
    // Apply the scroll offset to maintain visual position
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    
    burger.classList.add('is-open');
    nav.classList.add('is-open');
    document.body.classList.add('menu-open');
}

burger.addEventListener('click', function(e) {
    const isMenuOpen = nav.classList.contains('is-open');
    
    if (!isMenuOpen) {
        openMenu();
    } else {
        closeMenu();
    }
});

// Close menu when clicking on the visible background wedge area
wedgeCloseArea.addEventListener('click', function(e) {
    if (nav.classList.contains('is-open')) {
        closeMenu();
    }
});