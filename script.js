const controls = document.querySelectorAll(".control > button");
const timers = document.querySelectorAll(".timer > p");

const seconds = document.querySelector(".timer .seconds");
const minutes = document.querySelector(".timer .minutes");
const hours = document.querySelector(".timer .hours");

const start = document.querySelector(".control #start");
const reset = document.querySelector(".control #reset");
const end = document.querySelector(".control #end");
const resume = document.querySelector(".control #resume");

let idstart;

controls.forEach((el) => {
  console.log(el);
  el.addEventListener("click", () => {
    controls.forEach((el) => el.classList.remove("pressed"));
    el.classList.add("pressed");
  });
});
start.addEventListener("click", () => {
  let init = 0;
  let sec, min, hr;
  [{ textContent: sec }, { textContent: min }, { textContent: hr }] = timers;

  idstart = setInterval(() => {
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min == 60) {
        min = 0;
        hr++;
      }
    }
    seconds.textContent = `${sec}`.padStart(2, "0");
    minutes.textContent = `${min}`.padStart(2, "0");
    hours.textContent = `${hr}`.padStart(2, "0");
  }, 1000);
});

end.addEventListener("click", () => {
  clearInterval(idstart);
  //   resume.classList.add("active");
});

reset.addEventListener("click", () => {
  clearInterval(idstart);
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
});

function formatWatch({ measure }) {
  if (measure === "seconds") {
  } else if (measure === "minutes") {
  } else if (measure === "hours") {
  }
}
