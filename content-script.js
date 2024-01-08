"use strict"
function setimages() {
  let images = document.querySelectorAll('img');
  if (images) {
    for (let i = 0; i < images.length; i++) {
      images[i].style = "pointer-events: auto;";
    };
  };
};
setimages();
const imgdetector = new MutationObserver(setimages);
imgdetector.observe(document.body, {
  childList: true,
  subtree: true
});
console.log("loaded");
