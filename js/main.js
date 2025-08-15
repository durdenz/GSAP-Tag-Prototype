// Setup button listeners
const allBtn = document.querySelectorAll(".allbtn");
const tag1Btn = document.querySelectorAll(".tag1btn");
const tag2Btn = document.querySelectorAll(".tag2btn");
const tag3Btn = document.querySelectorAll(".tag3btn");
const tag4Btn = document.querySelectorAll(".tag4btn");

allBtn.forEach((el) => {  // Reset All Cards to orginal positions
  el.addEventListener('click', () => {
    console.log(`allBtn clicked`);
    gsap.to(".tag1", {
      x : 0,
      duration : 2,
    });
    gsap.to(".tag2", {
      x : 0,
      duration : 2,
    });
    gsap.to(".tag3", {
      x : 0,
      duration : 2,
    });
    gsap.to(".tag4", {
      x : 0,
      duration : 2,
    });
    unhideRows();
  });
});

tag1Btn.forEach((el) => { 
  el.addEventListener("click", () => {
    console.log(`tag1Btn clicked`);
    gsap.to(".tag1", {
      x : 0,
      duration : 2,
    });
    gsap.to(".tag2", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag3", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag4", {
      x : -2000,
      duration : 2,
    });
    unhideRows();
    hideRows(".tag1");
  });
});

tag2Btn.forEach((el) => {
    el.addEventListener("click", () => {
    console.log(`tag2Btn clicked`);
    gsap.to(".tag1", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag2", {
      x : 0,
      duration : 2,
    });
    gsap.to(".tag3", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag4", {
      x : -2000,
      duration : 2,
    });
    unhideRows();
    hideRows(".tag2");
  });
});

tag3Btn.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(`tag3Btn clicked`);
    gsap.to(".tag1", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag2", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag3", {
      x : 0,
      duration : 2,
    });
    gsap.to(".tag4", {
      x : -2000,
      duration : 2,
    });
    unhideRows();
    hideRows(".tag3");
  });
});

tag4Btn.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(`tag3Btn clicked`);
    gsap.to(".tag1", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag2", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag3", {
      x : -2000,
      duration : 2,
    });
    gsap.to(".tag4", {
      x : 0,
      duration : 2,
    });
    unhideRows();
    hideRows(".tag4");
  });
});

function hideRows(card) {
  const rows = document.querySelectorAll(".CardRow");

  // Loop thru each row and check card in row
  rows.forEach((row) => {
    let Visible = false;
    row.querySelectorAll(card).forEach(() => {
      Visible=true; 
    });

    if (!Visible) { // No Children Visible - Hide the Row
      row.style.display = "none";
    }
  });
}

function unhideRows() {
  const rows = document.querySelectorAll(".CardRow");
  // Loop thru each row and set Display
  rows.forEach((row) => {
    row.style.display = "flex";
  });
}