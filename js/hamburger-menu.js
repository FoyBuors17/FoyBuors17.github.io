let burger = document.getElementById("burger");
let nav = document.getElementById("main-nav");
let scrollPosition = 0;

function unlockBodyScroll() {
  document.body.style.removeProperty("--body-scroll-lock-top");
}

function isReviewsHref(href) {
  return typeof href === "string" && href.indexOf("#reviews") !== -1;
}

function isHomePage() {
  const path = window.location.pathname || "";
  const page = path.split("/").pop() || "";
  return page === "" || page === "index.html";
}

function scrollToReviews() {
  const target = document.getElementById("reviews");
  if (!target) return false;

  const navbar = document.querySelector(".navbar");
  const offset = navbar ? navbar.offsetHeight + 12 : 100;
  const top =
    target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });

  if (history.replaceState) {
    history.replaceState(null, "", "#reviews");
  }

  return true;
}

function handleReviewsLinkClick(event) {
  const link = event.currentTarget;
  const href = link.getAttribute("href") || "";
  if (!isReviewsHref(href)) return;

  // Already on home: scroll in place (browser won't re-scroll same-page hash).
  if (isHomePage() && document.getElementById("reviews")) {
    event.preventDefault();

    if (burger && nav && nav.classList.contains("is-open")) {
      burger.classList.remove("is-open");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      unlockBodyScroll();
    }

    // Wait a frame so body unlock applies before measuring scroll position.
    window.requestAnimationFrame(function () {
      scrollToReviews();
    });
  }
}

// Desktop + mobile Reviews links (all pages that include this script)
document.querySelectorAll('a[href*="#reviews"]').forEach(function (link) {
  link.addEventListener("click", handleReviewsLinkClick);
});

// Avoid runtime errors on pages that don't include the mobile menu.
if (burger && nav) {
  // Create the wedge close area element
  let wedgeCloseArea = document.createElement("div");
  wedgeCloseArea.className = "wedge-close-area";
  document.body.appendChild(wedgeCloseArea);

  function lockBodyScroll() {
    scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop || 0;
    document.body.style.setProperty(
      "--body-scroll-lock-top",
      `-${scrollPosition}px`
    );
  }

  function closeMenu() {
    burger.classList.remove("is-open");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    unlockBodyScroll();
    window.scrollTo(0, scrollPosition);
  }

  function openMenu() {
    lockBodyScroll();
    burger.classList.add("is-open");
    nav.classList.add("is-open");
    document.body.classList.add("menu-open");
  }

  function forceMenuClosed() {
    burger.classList.remove("is-open");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    unlockBodyScroll();
  }

  // Prevent sticky no-scroll state on Android/Samsung after restores.
  window.addEventListener("pageshow", forceMenuClosed);
  document.addEventListener("visibilitychange", function () {
    if (
      document.visibilityState === "visible" &&
      !nav.classList.contains("is-open")
    ) {
      unlockBodyScroll();
    }
  });

  // Script is at end of <body>; clear any stale lock as soon as possible.
  forceMenuClosed();

  burger.addEventListener("click", function () {
    if (!nav.classList.contains("is-open")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Close menu when clicking on the visible background wedge area
  wedgeCloseArea.addEventListener("click", function () {
    if (nav.classList.contains("is-open")) {
      closeMenu();
    }
  });

  // Close menu for non-Reviews links (Reviews handled above)
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (isReviewsHref(link.getAttribute("href"))) return;
      if (nav.classList.contains("is-open")) {
        closeMenu();
      }
    });
  });
}
