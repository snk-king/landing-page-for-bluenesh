function startCounterAnimation(entry) {
  const valueDisplay = entry.target;
  let interval = 4000;
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, duration);
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounterAnimation(entry);
      observer.unobserve(entry.target);
    }
  });
}, options);

const valueDisplays = document.querySelectorAll(".num");
    valueDisplays.forEach((valueDisplay) => {
    observer.observe(valueDisplay);
});
const expandLink = document.getElementById("expandLink");
const myIframe = document.getElementById("myIframe");

expandLink.addEventListener("click", () => {
  if (myIframe.requestFullscreen) {
    myIframe.requestFullscreen();
  } else if (myIframe.mozRequestFullScreen) {
    myIframe.mozRequestFullScreen();
  } else if (myIframe.webkitRequestFullscreen) { 
    myIframe.webkitRequestFullscreen();
  } else if (myIframe.msRequestFullscreen) {
    myIframe.msRequestFullscreen();
  }
});
