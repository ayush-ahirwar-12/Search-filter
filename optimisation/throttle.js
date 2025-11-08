let input = document.querySelector("input");

function throttle(fnc, delay) {
  let timer=0;
  return function (...dets) {
    let now = Date.now();
    if (now - timer >= delay) {
      timer = now;
      fnc(...dets);
    }
  };
}

input.addEventListener("input",throttle(function(){
    console.log("hello");
    
},1000))
