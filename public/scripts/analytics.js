function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  console.log("GA4 Event:", eventName, params);
}

window.trackEvent = trackEvent;
