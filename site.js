'use strict';

// Progressive enhancement: package links remain normal on-page anchors without JS.
const selection = document.getElementById('selected-package');

document.querySelectorAll('.package-link').forEach((link) => {
  link.addEventListener('click', () => {
    const packageName = link.dataset.package;
    selection.textContent = `Let’s talk about ${packageName}.`;
  });
});
