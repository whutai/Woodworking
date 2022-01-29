const data = [
  {
    id: 1,
    title: "How To Edge Joint Panels by Hand",
    url: "https://www.youtube.com/embed/cOEoIG6bPzI?modestbranding=1&rel=0"
  },
  {
    id: 2,
    title: "How To Edge Joint Panels by Hand 1",
    url: "https://www.youtube.com/embed/RhVrOse1DFE?modestbranding=1"
  },
  {
    id: 3,
    title: "Sizing The Cabinet Panels 2",
    url: "https://www.youtube.com/embed/-PfmmUqRaHY?modestbranding=1"
  },
  {
    id: 4,
    title: "How To Cut The Half Blind Dovetails 3",
    url: "https://www.youtube.com/embed/4Wu07_654AE?modestbranding=1"
  },
  {
    id: 5,
    title: "How To Fit the Half-Blind Dovetails 4",
    url: "https://www.youtube.com/embed/DgJHqICLM_Y?modestbranding=1"
  },
  {
    id: 6,
    title: "Making The Drawer Runners 5",
    url: "https://www.youtube.com/embed/_C8aj-lh8XY?modestbranding=1"
  },
  {
    id: 7,
    title: "Cutting Grooves and Rebates using Routers 6",
    url: "https://www.youtube.com/embed/_neaJYGJGDg?modestbranding=1"
  },
  {
    id: 8,
    title: "Grooving and Rebating using Hand Tools  6.5",
    url: "https://www.youtube.com/embed/YKdN_PAX9rA?modestbranding=1"
  },
  {
    id: 9,
    title: "Cutting The Shelf Rebates 7",
    url: "https://www.youtube.com/embed/-H7rvRsaQAc?modestbranding=1"
  },
  {
    id: 10,
    title: "How To Prepare the Cabinet for Gluing Up 8",
    url: "https://www.youtube.com/embed/dRHnHLlXuIM?modestbranding=1"
  },
  {
    id: 11,
    title: "Gluing and Assembling 9",
    url: "https://www.youtube.com/embed/nhJVxvLaaVY?modestbranding=1"
  },
  {
    id: 12,
    title: "Making The Top and Bottom Plinth 10",
    url: "https://www.youtube.com/embed/OAXRNkejjko?modestbranding=1"
  },
  {
    id: 13,
    title: "Attaching The Back Panel 11",
    url: "https://www.youtube.com/embed/TbOVnDrPco4?modestbranding=1"
  },
  {
    id: 14,
    title: "Grooving The Door Frame 12",
    url: "https://www.youtube.com/embed/bj6gWjXkl1s?modestbranding=1"
  },
  {
    id: 15,
    title: "Mortising The Frame and Panel Door 13",
    url: "https://www.youtube.com/embed/H5xeJwmmVEo?modestbranding=1"
  },
  {
    id: 16,
    title: "Laying Out the Door Tenons 14",
    url: "https://www.youtube.com/embed/0faGGVn5Xa8?modestbranding=1"
  },
  {
    id: 17,
    title: "Cutting and Fitting the Tenons 15",
    url: "https://www.youtube.com/embed/1TEivVplv9s?modestbranding=1"
  },
  {
    id: 18,
    title: "Fitting The Door Panel 16",
    url: "https://www.youtube.com/embed/jTsDECSyzTU?modestbranding=1"
  },
  {
    id: 19,
    title: "Gluing The Door 17",
    url: "https://www.youtube.com/embed/9-vnJzhSKuI?modestbranding=1"
  },
  {
    id: 20,
    title: "Fitting The Frame and Panel Door 18",
    url: "https://www.youtube.com/embed/4n1fJ8LYnWQ?modestbranding=1"
  },
  {
    id: 21,
    title: "How To Hinge The Door 19",
    url: "https://www.youtube.com/embed/zCwpSIOoBTg?modestbranding=1"
  },
  {
    id: 22,
    title: "Sizing The Drawer Components 20",
    url: "https://www.youtube.com/embed/gIDoJ-wmJxk?modestbranding=1"
  },
  {
    id: 23,
    title: "How To Layout and Cut the Drawer Tails 21",
    url: "https://www.youtube.com/embed/Gd2YMJfGyLw?modestbranding=1"
  },
  {
    id: 24,
    title: "Fitting the Drawer Dovetails 22",
    url: "https://www.youtube.com/embed/VWpif5f4qKA?modestbranding=1"
  },
  {
    id: 25,
    title: "Fitting The Drawer Base 23",
    url: "https://www.youtube.com/embed/10drItm2UZQ?modestbranding=1"
  },
  {
    id: 26,
    title: "Pre-Sanding and Gluing The Drawer 24",
    url: "https://www.youtube.com/embed/JeocSMbKIsw?modestbranding=1"
  },
  {
    id: 27,
    title: "Fitting the Drawer 25",
    url: "https://www.youtube.com/embed/3tzc-__Mnhg?modestbranding=1"
  },
  {
    id: 28,
    title: "Drawer and Door Stops 26",
    url: "https://www.youtube.com/embed/9-QlSE1cQss?modestbranding=1"
  },
  {
    id: 29,
    title: "Making The Handles 27",
    url: "https://www.youtube.com/embed/J00HCVbM_3Y?modestbranding=1"
  },
  {
    id: 30,
    title: "Sanding The Cabinet 28",
    url: "https://www.youtube.com/embed/B_huanEZmyE?modestbranding=1"
  },
  {
    id: 31,
    title: "Finishing The Cabinet 29",
    url: "https://www.youtube.com/embed/QfFoyBKWRDs?modestbranding=1"
  }
];

const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

for (let i = 0; i < data.length; i++) {
  let tag = document.createElement("div");
  let text = document.createTextNode(data[i].id);
  tag.appendChild(text);
  tag.className = "episode__number";
  let element = document.getElementById("content__episode");
  element.appendChild(tag);
}

const episode = document.querySelectorAll(".episode__number");
for (let i = 0; i < episode.length; i++) {
  episode[i].addEventListener("click", (e) => {
    let reRenderVideo = data.filter((obj) => {
      if (obj.id == episode[i].innerHTML) {
        document.getElementById("video-embed").setAttribute("src", obj.url);
        document.getElementById("video__item--title").innerHTML = obj.title;
      }
    });
  });
}
