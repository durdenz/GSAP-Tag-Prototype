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
    });
  });
