/// img source
const images = [
  {
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
    alt: "nebula cloud",
  },
  {
    src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
    alt: "mountains reflection on water",
  },
  { 
    src: "https://images.unsplash.com/photo-1525054098605-8e762c017741", 
    alt: "strong waves" 
  },
  {
    src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
    alt: "green mountains and blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
    alt: "blue and purple galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
    alt: "blue wavy ocean with horizon",
  },
  {
    src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
    alt: "brown and black galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
    alt: "person on clif in canyon",
  },
  {
    src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
    alt: "whale tale above water surface",
  },
]

/// grid of pictures
let block = document.getElementById('content');
images.forEach( img => {
  const newImg = document.createElement('img');
  newImg.src = img.src;
  newImg.alt = img.alt;
  block.appendChild(newImg);
})

// lightbox activation
const lightboximages = document.querySelectorAll('img')
lightboximages.forEach( image => {
    image.addEventListener ('click', e => {
        lightbox.classList.add('active')
        const boximg = document.createElement('img')
        boximg.src = image.src
        boximg.id = 'boximg'
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(boximg)
    })
})

lightbox.addEventListener('click', e =>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

//left and right display function
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');


leftbtn.addEventListener('click', e => {
  if (i <= 0) {i = i-1 ; i--}
  image.src[i]
});
console.log(i)

rightbtn.addEventListener('click', e => {
  if (i >= lightboximages.length) {i = i+1; i++}
  image.src[i]
});
console.log(i)

