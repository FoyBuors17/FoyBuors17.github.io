document.addEventListener("DOMContentLoaded", () => {
  const tabsRoot = document.querySelector("[data-tabs]");
  if (!tabsRoot) return;

  const tablist = tabsRoot.querySelector(".checklist-tab-list");
  const pairRegularMove = tablist?.querySelector(
    '[data-checklist-pair="regular-move"]',
  );
  const pairRentalHourly = tablist?.querySelector(
    '[data-checklist-pair="rental-hourly"]',
  );
  const mqMobile = window.matchMedia("(max-width: 640px)");

  const PAIR_REGULAR_MOVE = new Set([
    "regular-clean",
    "move-in-out-clean",
  ]);
  const PAIR_RENTAL_HOURLY = new Set([
    "rental-airbnb-clean",
    "hourly-clean",
  ]);

  const getButtons = () =>
    Array.from(tabsRoot.querySelectorAll(".checklist-tab-button"));

  const panels = Array.from(tabsRoot.querySelectorAll(".checklist-tab-panel"));

  const syncMobileTabStack = () => {
    if (!pairRegularMove || !pairRentalHourly || !mqMobile.matches) return;

    const active = getButtons().find((b) => b.classList.contains("active"));
    const activeId = active?.dataset.tabTarget;
    if (!activeId) return;

    if (PAIR_REGULAR_MOVE.has(activeId)) {
      tablist.appendChild(pairRentalHourly);
      tablist.appendChild(pairRegularMove);
    } else if (PAIR_RENTAL_HOURLY.has(activeId)) {
      tablist.appendChild(pairRegularMove);
      tablist.appendChild(pairRentalHourly);
    }
  };

  const setActiveTab = (targetId) => {
    getButtons().forEach((button) => {
      const isActive = button.dataset.tabTarget === targetId;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("active", isActive);
      panel.setAttribute("aria-hidden", String(!isActive));
    });

    syncMobileTabStack();
  };

  getButtons().forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.tabTarget;
      if (!targetId) return;
      setActiveTab(targetId);
    });
  });

  const onViewportChange = () => {
    syncMobileTabStack();
  };

  mqMobile.addEventListener("change", onViewportChange);
  window.addEventListener("resize", onViewportChange);

  syncMobileTabStack();
});
