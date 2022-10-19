MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const observer = new MutationObserver(() => {
  // remove "explore" icon
  document.querySelector('a[href="/explore/"]')?.parentNode?.remove();

  // remove content if inside "explore" tab
  if (window.location.href.match(/\/explore\//)) {
    document.querySelector('main[role="main"]')?.remove();
  }
});

observer.observe(document, {
  subtree: true,
  attributes: true,
});
