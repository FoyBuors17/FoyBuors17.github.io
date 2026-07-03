/** Launch27 live booking form base (Share a Link / iframe). */
window.TIDYFOX_LAUNCH27_BOOKING_BASE =
  "https://tidyfox.launch27.com/?w_cleaning";

/**
 * Pre-select booking form fields via URL query parameters.
 *
 * category_id → "Choose Service Type" dropdown (Admin → Service Categories)
 * service_id  → specific service/tier (Admin → Services → Services)
 *
 * Docs: https://intercom.help/Launch27/en/articles/4259200
 */
window.TIDYFOX_SERVICE_BOOKING = {
  premium: {
    categoryId: "5",
    serviceId: "",
  },
  regular: {
    categoryId: "15",
    serviceId: "",
  },
  move: {
    categoryId: "3",
    serviceId: "",
  },
  airbnb: {
    categoryId: "17",
    serviceId: "",
  },
};

function buildLaunch27BookingQuery(entry) {
  const params = new URLSearchParams();
  const categoryId =
    typeof entry === "string" ? "" : entry.categoryId || "";
  const serviceId = typeof entry === "string" ? entry : entry.serviceId || "";

  if (categoryId) params.set("category_id", categoryId);
  if (serviceId) params.set("service_id", serviceId);

  return params.toString();
}

/** Full Launch27 URL (opens on tidyfox.launch27.com). */
function getLaunch27DirectUrl(entry) {
  const query = buildLaunch27BookingQuery(entry);
  if (!query) return window.TIDYFOX_LAUNCH27_BOOKING_BASE;
  return `${window.TIDYFOX_LAUNCH27_BOOKING_BASE}&${query}`;
}

/** Your booking page — forwards params into the embedded iframe. */
function getBookingPageUrl(entry) {
  const query = buildLaunch27BookingQuery(entry);
  return query ? `booking.html?${query}` : "booking.html";
}
