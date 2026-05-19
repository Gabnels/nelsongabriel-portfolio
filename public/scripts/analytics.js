function trackEvent(eventName) {
  console.log("Event:", eventName);

  const events = JSON.parse(localStorage.getItem("events") || "[]");

  events.push({
    event: eventName,
    date: new Date().toISOString(),
  });

  localStorage.setItem("events", JSON.stringify(events));
}

window.trackEvent = trackEvent;
