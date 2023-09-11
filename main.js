console.log("working");
let audioE1 = document.querySelector("audio");
console.log(audioE1);

let playbtn = document.querySelector("#playbtn");
let isplaying = false;
playbtn.addEventListener("click", (e) => {
  if (isplaying) {
    audioE1.pause();
    isplaying = false;
    e.target.class;
  } else {
    audioE1.play();
    isplaying = true;
  }
});
let forbtn = document.querySelector("forbtn");
let isvolume = false;
forbtn.addEventListener("click", (e) => {
  if (isvolume) {
    audioE1.forward();
    isvolume = false;
    e.target.class;
  } else {
    audioE1.backwaed();
    isforward = false;
  }
});
