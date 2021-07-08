const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");


const image1 = `<img src=${images[0].url} alt="${images[0].alt}" class="gallery__item"`;
const image2 = `<img src=${images[1].url} alt="${images[1].alt}" class="gallery__item"`;
const image3 = `<img src=${images[2].url} alt="${images[2].alt}" class="gallery__item"`;

gallery.insertAdjacentHTML("afterbegin", `<li>${image1}</li><li>${image2}</li><li>${image3}</li>`);
console.log(gallery);
// `строка текста`