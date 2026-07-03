document.addEventListener("DOMContentLoaded", () => {
  const config = window.TIDYFOX_SERVICE_BOOKING;
  if (!config || typeof buildLaunch27BookingQuery !== "function") return;

  const QUERY_KEY = "tidyfox_booking_query";
  const RETURN_KEY = "tidyfox_booking_return";

  document.querySelectorAll("[data-service-key]").forEach((link) => {
    const key = link.dataset.serviceKey;
    const entry = config[key];
    if (!entry) return;

    link.href = "booking.html";

    link.addEventListener("click", (event) => {
      const query = buildLaunch27BookingQuery(entry);
      if (!query) return;

      event.preventDefault();

      try {
        sessionStorage.setItem(QUERY_KEY, query);
        sessionStorage.setItem(RETURN_KEY, "index.html");
        window.location.href = "booking.html";
      } catch (err) {
        window.location.href = "booking.html?" + query;
      }
    });
  });
});
