let containerImage = document.querySelectorAll(
  "div.col.container-image-jumbotron"
);


  window.addEventListener("load", () => {
    if (screen.width <= 425) {
      for (let i = 0; i < containerImage.length; i++) {
        containerImage[i].parentElement.removeChild(containerImage[i]);
      }
    }

      if (screen.width <= 1200) {
        let remove_col = document.querySelectorAll(
          ".testimonial-main-4.col.col-md-4"
        );
        for (let i = 0; i < remove_col.length; i++) {
          let a = remove_col[i];
          a.classList.remove("col-md-4");
          a.classList.add("col-md-8");
        }
      }
      if (screen.width <= 1024) {
        let remove_col_md_4 = document.querySelectorAll(
          ".col.col-md-3.container-content-des-main-5"
        );
        let remove_offset = document.querySelector(".col.col-md-4.offset-1");
        remove_offset.classList.remove("offset-1");
        for (let i = 0; i < remove_col_md_4.length; i++) {
          let b = remove_col_md_4[i];
          b.classList.remove("col-md-3");
          b.classList.add("col-md-4");
        }
      }
        if (screen.width <= 425) {
          let container_content_title = document.querySelector(
            ".container-content-title"
          );
          let add_content = [
            "d-flex",
            "flex-column",
            "justify-content-evenly",
            "align-items-center",
          ];
         for (const arr_add_content of add_content ) {
            container_content_title.classList.add(arr_add_content)
         }
        }
  });

// scroll

function navbarEffect() {
  let backgroundNav = document.querySelector(
    "nav.navbar.navbar-expand-lg.px-5.fixed-top"
    );
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    backgroundNav.style =
      "background: linear-gradient(90.19deg, rgba(10, 199, 117, 0.37) 0.55%, rgba(60, 88, 233, 0.38) 99.57%)";
  } else if (document.body.scrollTop === 0) {
    backgroundNav.style = "";
  }
}

function scrollingwhy() {
  let elementId = document.getElementById(`why`);
  elementId.scrollIntoView({ behavior: "smooth" });
}

function scrollingdonate() {
  let elementId = document.getElementById(`donate`);
  elementId.scrollIntoView({ behavior: "smooth" });
}
function scrollingjoin() {
  let elementId = document.getElementById(`join-now`);
  elementId.scrollIntoView({ behavior: "smooth" });
}
function scrollinghome() {
  let elementId = document.getElementById(`home`);
  elementId.scrollIntoView({ behavior: "smooth" });
}

window.onscroll = function () {
  navbarEffect();
};
// percen
let school = document.querySelector("h5.number-main-5.school");
let student = document.querySelector("h5.number-main-5.student");
let containerMain5 = document.querySelector(".container-content-des-main-5");
let count = 0;
let count2 = 0;
window.addEventListener("load", () => {
  let intervalNumber = setInterval(animasi, 20);
  let intervalNumber2 = setInterval(animasi2, 1);
  function animasi() {
    if (count == 200) {
      clearInterval();
    } else {
      count++;
      school.textContent = count;
    }
  }
  function animasi2() {
    if (count2 == 2000) {
      clearInterval();
    } else {
      count2++;
      student.textContent = count2;
    }
  }
});

// let aa = document.querySelector('.container-fluid.main-5')
// let bb = []
// bb.push(window.scrollTop)
// console.log(aa.scrollY)