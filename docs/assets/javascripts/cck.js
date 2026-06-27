// docs/assets/javascripts/cck.js
// Fetches live CCK info from the API and fills in any element marked with data-cck (text) or data-cck-href (link href)
// Runs on every page render, including mkdocs-material instant navigation.

(function () {
  const API_URL = "https://api.chilloutvr.net/1/public/cck/info";

  // Cache the response across instant-nav page changes so we don't refetch on every navigation. Set to null to force a
  // refetch.
  let cckPromise = null;

  function fetchCck() {
    if (!cckPromise) {
      cckPromise = fetch(API_URL)
        .then((r) => {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        })
        .then((json) => {
          const i = json.data.cckInfo;
          return {
            "cck4.version": i.cckVersion,
            "cck4.downloadUrl": i.cckDownloadUrl,
            "cck4.unity.version": i.unityVersion,
            "cck4.unity.hub": i.unityHubInstallUrl,
            "cck4.unity.executable": i.unityDownloadUrl,
          };
        })
        .catch((e) => {
          // Reset so a later page view can retry, then re-throw.
          cckPromise = null;
          throw e;
        });
    }
    return cckPromise;
  }

  function populate(map) {
    document.querySelectorAll("[data-cck]").forEach((el) => {
      const v = map[el.dataset.cck];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-cck-href]").forEach((el) => {
      const v = map[el.dataset.cckHref];
      if (v != null) el.setAttribute("href", v);
    });
  }

  function run() {
    // Skip work if there's nothing to fill on this page
    if (!document.querySelector("[data-cck], [data-cck-href]")) return;
    fetchCck()
      .then(populate)
      .catch((e) => console.error("CCK info fetch failed:", e));
  }

  // mkdocs-material exposes document$ (an RxJS observable) that emits on every page load AND every instant-navigation
  // render. Prefer it when present
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    // Fallback for non-instant-nav setups
    if (document.readyState !== "loading") {
      run();
    } else {
      document.addEventListener("DOMContentLoaded", run);
    }
  }
})();