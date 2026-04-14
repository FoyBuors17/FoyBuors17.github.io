let burger = document.getElementById('burger');
let nav = document.getElementById('main-nav');
let scrollPosition = 0;

// Avoid runtime errors on pages that don't include the mobile menu.
if (burger && nav) {
    // Create the wedge close area element
    let wedgeCloseArea = document.createElement('div');
    wedgeCloseArea.className = 'wedge-close-area';
    document.body.appendChild(wedgeCloseArea);

    function unlockBodyScroll() {
        document.body.style.removeProperty('--body-scroll-lock-top');
    }

    function lockBodyScroll() {
        scrollPosition =
            window.pageYOffset || document.documentElement.scrollTop || 0;
        document.body.style.setProperty(
            '--body-scroll-lock-top',
            `-${scrollPosition}px`
        );
    }

    function closeMenu() {
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        unlockBodyScroll();
        window.scrollTo(0, scrollPosition);
    }

    function openMenu() {
        lockBodyScroll();
        burger.classList.add('is-open');
        nav.classList.add('is-open');
        document.body.classList.add('menu-open');
    }

    function forceMenuClosed() {
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        unlockBodyScroll();
    }

    // Prevent sticky no-scroll state on Android/Samsung after restores.
    window.addEventListener('pageshow', forceMenuClosed);
    document.addEventListener('visibilitychange', function () {
        if (
            document.visibilityState === 'visible' &&
            !nav.classList.contains('is-open')
        ) {
            unlockBodyScroll();
        }
    });

    // Script is at end of <body>; clear any stale lock as soon as possible.
    forceMenuClosed();

    burger.addEventListener('click', function () {
        if (!nav.classList.contains('is-open')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    // Close menu when clicking on the visible background wedge area
    wedgeCloseArea.addEventListener('click', function () {
        if (nav.classList.contains('is-open')) {
            closeMenu();
        }
    });
}
