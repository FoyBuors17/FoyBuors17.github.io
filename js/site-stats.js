/**
 * Central site stats — update values here; they fill in across the site.
 *
 * googleReviews       → "120+ Reviews", "over 120 reviews", FAQ copy, etc.
 * satisfiedClients    → "500+", "over 500 homeowners", stats counter, etc.
 * cleaningsCompleted  → "5000+", "over 5000 cleanings", stats counter, etc.
 * combinedReviews     → "525+" Google and Launch27 Reviews Combined
 */
window.TIDYFOX_SITE_STATS = {
  googleReviews: 120,
  satisfiedClients: 500,  
  cleaningsCompleted: 5000,
  combinedReviews: 525, 
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

  function formatCombinedReviews(format) {
    return formatStat("combinedReviews", format);
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
    applyTextStats("data-combined-reviews", formatCombinedReviews);

    // Stats counter animation reads data-number — keep it in sync
    syncCounter("data-satisfied-clients-count", "satisfiedClients");
    syncCounter("data-cleanings-completed-count", "cleaningsCompleted");
    syncCounter("data-combined-reviews-count", "combinedReviews");
  }

  window.TIDYFOX_formatGoogleReviews = formatGoogleReviews;
  window.TIDYFOX_formatSatisfiedClients = formatSatisfiedClients;
  window.TIDYFOX_formatCleaningsCompleted = formatCleaningsCompleted;
  window.TIDYFOX_formatCombinedReviews = formatCombinedReviews;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applySiteStats);
  } else {
    applySiteStats();
  }
})();
