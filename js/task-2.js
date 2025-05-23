const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-img"></li>`)
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.style.display = 'flex';
gallery.style.gap = '10px';
gallery.style.listStyle = 'none';


gallery.querySelectorAll('.gallery-img').forEach(img => {
  img.style.width = '300px';
  img.style.height = 'auto';
});