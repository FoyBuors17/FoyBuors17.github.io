/**
 * Launch27 embed (jsbundle → iframe) + delayed back trap for service cards.
 * CTAs use plain booking.html with no trap — browser Back works naturally.
 */
(function () {
  var QUERY_KEY = "tidyfox_booking_query";
  var RETURN_KEY = "tidyfox_booking_return";
  var LAUNCH27_BASE = "https://tidyfox.launch27.com/?w_cleaning";

  var BACK_TRAP_DELAY_MS = 1500;
  var BACK_TRAP_GUARD_MS = 500;
  var BACK_TRAP_GUARD_DURATION_MS = 3500;

  function readBookingQuery() {
    var query = window.location.search.replace(/^\?/, "");

    if (!query) {
      try {
        query = sessionStorage.getItem(QUERY_KEY) || "";
        if (query) sessionStorage.removeItem(QUERY_KEY);
      } catch (e) {}
    }

    return query;
  }

  function readReturnPage() {
    try {
      var stored = sessionStorage.getItem(RETURN_KEY);
      if (stored) {
        sessionStorage.removeItem(RETURN_KEY);
        return stored;
      }
    } catch (e) {}

    var ref = document.referrer || "";
    if (!ref) return "index.html";
    if (ref.indexOf("index.html") !== -1) return "index.html";

    var match = ref.match(/\/([^/?#]+\.html)(?:[?#]|$)/);
    return match ? match[1] : "index.html";
  }

  var query = readBookingQuery();

  if (window.location.search) {
    history.replaceState(null, "", "booking.html");
  }

  var src = query ? LAUNCH27_BASE + "&" + query : LAUNCH27_BASE;
  var needsBackTrap = Boolean(query);

  document.write(
    '<script src="https://tidyfox.launch27.com/jsbundle"><\/script>' +
      '<iframe id="booking-widget-iframe" src="' +
      src +
      '" tabindex="-1" style="border:none;width:100%;min-height:2739px;overflow:hidden;" scrolling="no" title="Book Your Cleaning Service"></iframe>'
  );

  if (!needsBackTrap) return;

  var returnTo = readReturnPage();

  function redirectHome() {
    window.location.replace(returnTo);
  }

  function pushGuards() {
    history.pushState({ tidyfoxBookingBack: true }, "", location.href);
    history.pushState({ tidyfoxBookingBack: true }, "", location.href);
  }

  function installBackTrap() {
    window.addEventListener("popstate", redirectHome);

    if ("navigation" in window && navigation.addEventListener) {
      navigation.addEventListener("navigate", function (event) {
        if (!event.canIntercept || event.navigationType !== "traverse") return;

        var current = navigation.currentEntry;
        if (!current || typeof event.destination.index !== "number") return;
        if (event.destination.index >= current.index) return;

        event.intercept({ handler: redirectHome });
      });
    }

    pushGuards();

    var elapsed = 0;
    var guardTimer = window.setInterval(function () {
      pushGuards();
      elapsed += BACK_TRAP_GUARD_MS;
      if (elapsed >= BACK_TRAP_GUARD_DURATION_MS) {
        window.clearInterval(guardTimer);
      }
    }, BACK_TRAP_GUARD_MS);
  }

  function scheduleBackTrap() {
    window.setTimeout(installBackTrap, BACK_TRAP_DELAY_MS);
  }

  if (document.readyState === "complete") {
    scheduleBackTrap();
  } else {
    window.addEventListener("load", scheduleBackTrap);
  }
})();
