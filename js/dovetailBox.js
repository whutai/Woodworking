const data = [
  {
    id: 1,
    title: "Learn How To Make a Dovetail Box!  1",
    url: "https://www.youtube.com/embed/m2ufl7gx1-k?modestbranding=1&rel=0"
  },
  {
    id: 2,
    title: "Sizing Material 2",
    url: "https://www.youtube.com/embed/wGEEk5RPCOE?modestbranding=1"
  },
  {
    id: 3,
    title: "Marking Out Dovetails 3",
    url: "https://www.youtube.com/embed/aJlMtPqFatI?modestbranding=1"
  },
  {
    id: 4,
    title: "Cutting the Tails 4",
    url: "https://www.youtube.com/embed/5CICGYJGIYQ?modestbranding=1"
  },
  {
    id: 5,
    title: "Transferring the Tails 5",
    url: "https://www.youtube.com/embed/0FvlVb7Tih8?modestbranding=1"
  },
  {
    id: 6,
    title: "Cutting The Dovetail Sockets 6",
    url: "https://www.youtube.com/embed/nYxbRWJOlQA?modestbranding=1"
  },
  {
    id: 7,
    title: "Adjusting Dovetail Pins 7",
    url: "https://www.youtube.com/embed/3PDXF4rGS5k?modestbranding=1"
  },
  {
    id: 8,
    title: "Adjusting Dovetail Pins  8",
    url: "https://www.youtube.com/embed/TBDeqk7kg4Q?modestbranding=1"
  },
  {
    id: 9,
    title: "Cutting The Shelf Rebates 9",
    url: "https://www.youtube.com/embed/-H7rvRsaQAc?modestbranding=1"
  },
  {
    id: 10,
    title: "Adjusting Dovetail Pins 10",
    url: "https://www.youtube.com/embed/P_irWSyaX9c?modestbranding=1"
  },
  {
    id: 11,
    title: "Adjusting Dovetail Pins 11",
    url: "https://www.youtube.com/embed/x8j5U83BZg8?modestbranding=1"
  },
  {
    id: 12,
    title: "Making The Top and Bottom Plinth 12",
    url: "https://www.youtube.com/embed/OAXRNkejjko?modestbranding=1"
  },
  {
    id: 13,
    title: "Adjusting Dovetail Pins 13",
    url: "https://www.youtube.com/embed/Pht0B_cndA8?modestbranding=1"
  },
  {
    id: 14,
    title: "Adjusting Dovetail Pins 14",
    url: "https://www.youtube.com/embed/YJ__-Ef4-eo?modestbranding=1"
  },
  {
    id: 15,
    title: "Adjusting Dovetail Pins 15",
    url: "https://www.youtube.com/embed/oQNbiipe0Hc?modestbranding=1"
  },
  {
    id: 16,
    title: "Adjusting Dovetail Pins 16",
    url: "https://www.youtube.com/embed/HRhinkdUJhs?modestbranding=1"
  },
  {
    id: 17,
    title: "Adjusting Dovetail Pins 17",
    url: "https://www.youtube.com/embed/sU9cbXr0H4k?modestbranding=1"
  },
  {
    id: 18,
    title: "Adjusting Dovetail Pins 18",
    url: "https://www.youtube.com/embed/5lqPa-B8w6Y?modestbranding=1"
  },
  {
    id: 19,
    title: "Adjusting Dovetail Pins 19",
    url: "https://www.youtube.com/embed/q9vbKdIx3ao?modestbranding=1"
  },
  {
    id: 20,
    title: "Adjusting Dovetail Pins 20",
    url: "https://www.youtube.com/embed/KWTNY8MTCuE?modestbranding=1"
  },
  {
    id: 21,
    title: "Adjusting Dovetail Pins 21",
    url: "https://www.youtube.com/embed/Oo_94RAMVmk?modestbranding=1"
  },
  {
    id: 22,
    title: "Adjusting Dovetail Pins 22",
    url: "https://www.youtube.com/embed/7DgbyeIhkV4?modestbranding=1"
  }
];

const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
const removeLogoYoutube = document.getElementsByClassName(
  ".ytp-impression-link"
);
console.log("re", removeLogoYoutube);
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
