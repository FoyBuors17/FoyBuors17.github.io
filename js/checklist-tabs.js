document.addEventListener("DOMContentLoaded", () => {
  const tabsRoot = document.querySelector("[data-tabs]");
  if (!tabsRoot) return;

  const tablist = tabsRoot.querySelector(".checklist-tab-list");
  const pairPremiumRegular = tablist?.querySelector(
    '[data-checklist-pair="premium-regular"]',
  );
  const pairMoveAirbnb = tablist?.querySelector(
    '[data-checklist-pair="move-airbnb"]',
  );
  const mqMobile = window.matchMedia("(max-width: 640px)");

  const PAIR_PREMIUM_REGULAR = new Set(["hourly-clean", "regular-clean"]);
  const PAIR_MOVE_AIRBNB = new Set([
    "move-in-out-clean",
    "rental-airbnb-clean",
  ]);

  const getButtons = () =>
    Array.from(tabsRoot.querySelectorAll(".checklist-tab-button"));

  const panels = Array.from(tabsRoot.querySelectorAll(".checklist-tab-panel"));

  const setPairRows = (frontPair, backPair) => {
    frontPair.classList.add("is-front-row");
    frontPair.classList.remove("is-back-row");
    backPair.classList.add("is-back-row");
    backPair.classList.remove("is-front-row");

    // Back row first in DOM, front row last (overlap styles)
    tablist.appendChild(backPair);
    tablist.appendChild(frontPair);
  };

  const clearPairRows = () => {
    [pairPremiumRegular, pairMoveAirbnb].forEach((pair) => {
      if (!pair) return;
      pair.classList.remove("is-front-row", "is-back-row");
    });
  };

  const syncMobileTabStack = () => {
    if (!pairPremiumRegular || !pairMoveAirbnb) return;

    if (!mqMobile.matches) {
      clearPairRows();
      return;
    }

    const active = getButtons().find((b) => b.classList.contains("active"));
    const activeId =
      active?.getAttribute("data-tab-target") || active?.dataset?.tabTarget;
    if (!activeId) return;

    // Active pair is always the front (bottom) row.
    if (PAIR_PREMIUM_REGULAR.has(activeId)) {
      setPairRows(pairPremiumRegular, pairMoveAirbnb);
    } else if (PAIR_MOVE_AIRBNB.has(activeId)) {
      setPairRows(pairMoveAirbnb, pairPremiumRegular);
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
      const targetId =
        button.getAttribute("data-tab-target") || button.dataset.tabTarget;
      if (!targetId) return;
      setActiveTab(targetId);
    });
  });

  const onViewportChange = () => {
    syncMobileTabStack();
  };

  if (mqMobile.addEventListener) {
    mqMobile.addEventListener("change", onViewportChange);
  } else if (mqMobile.addListener) {
    mqMobile.addListener(onViewportChange);
  }
  window.addEventListener("resize", onViewportChange);

  syncMobileTabStack();
});
