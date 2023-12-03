alert("This Code is Written & Created by Md Jahidul")


let image = [
  "Dive.jpg",
  "farm.jpg",
  "Mountain.jpg",
  "ocean.jpg",
  "racoon.jpg",
  "img.jpg",
  "city.jpg",
  "beach.jpg",
  "flower.jpg",
  "butterfly.jpg",
  "aurora.jpg",
  "burj.jpg",
  "air ballon.jpg",
  "bridge.jpg",
  "fruit.jpg",
  "galaxy.jpg",
  "img_nature.jpg",
  "night sky.jpg",
  "rock.jpg",
  "sky.jpg",
];
console.log(image.length);

function random_image() {
  let ran_index = Math.floor(Math.random() * (image.length + 1));

  let select_img = image[ran_index];

  document.getElementById("imag").src = `./shower/${select_img}`;
  console.log(ran_index);
}

// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "orange";
//   btn.style.boxShadow = "0px 0px 20px orange";
//   btn.style.transition = "0.5s ease";
// });
let btn = document.querySelector(".btn");
let mod = "cay";
btn.addEventListener("click" , () => {
  if(mod == "cay"){
    mod = "org";
    btn.classList.add("orge");
    btn.classList.remove("cyn");
  }
  else {
    mod = "cay"
    btn.classList.add("cyn");
    btn.classList.remove("orge");
  }
});
