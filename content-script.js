document.addEventListener("DOMContentLoaded", (event) => {
  const imgdetector = new MutationObserver(mutations => {
    let images = document.querySelectorAll('img');
    if(images){
      for(let i = 0; i < images.length; i++){
          images[i].style = "pointer-events: auto;";
      }
    }
  });
  imgdetector.observe(document.body, {
    childList: true,
    subtree: true
  });
  console.log("loaded");
});
