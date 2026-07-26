/**
 * Central site stats — update values here; they fill in across the site.
 *
 * googleReviews      → "100+ Reviews", "over 100 reviews", FAQ copy, etc.
 * satisfiedClients   → "450+", "over 450 homeowners", stats counter, etc.
 * cleaningsCompleted → "4500+" stats counter
 */
window.TIDYFOX_SITE_STATS = {
  googleReviews: 100,
  satisfiedClients: 450,
  cleaningsCompleted: 4650,
};

(function () {
  function formatStat(key, format) {
    var n = window.TIDYFOX_SITE_STATS[key];
    if (n == null) return "";
    if (format === "plus") return n + "+";
    if (format === "over") return "over " + n;
    if (format === "more-than") return "more than " + n;
    return String(n);
  }

  function formatGoogleReviews(format) {
    return formatStat("googleReviews", format);
  }

  function formatSatisfiedClients(format) {
    return formatStat("satisfiedClients", format);
  }

  function formatCleaningsCompleted(format) {
    return formatStat("cleaningsCompleted", format);
  }

  function applyTextStats(attr, formatter) {
    document.querySelectorAll("[" + attr + "]").forEach(function (el) {
      var format = el.getAttribute(attr) || "number";
      el.textContent = formatter(format);
    });
  }

  function syncCounter(attr, key) {
    var value = window.TIDYFOX_SITE_STATS[key];
    document.querySelectorAll("[" + attr + "]").forEach(function (el) {
      el.setAttribute("data-number", String(value));
    });
  }

  function applySiteStats() {
    applyTextStats("data-google-reviews", formatGoogleReviews);
    applyTextStats("data-satisfied-clients", formatSatisfiedClients);
    applyTextStats("data-cleanings-completed", formatCleaningsCompleted);

    // Stats counter animation reads data-number — keep it in sync
    syncCounter("data-satisfied-clients-count", "satisfiedClients");
    syncCounter("data-cleanings-completed-count", "cleaningsCompleted");
  }

  window.TIDYFOX_formatGoogleReviews = formatGoogleReviews;
  window.TIDYFOX_formatSatisfiedClients = formatSatisfiedClients;
  window.TIDYFOX_formatCleaningsCompleted = formatCleaningsCompleted;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applySiteStats);
  } else {
    applySiteStats();
  }
})();
