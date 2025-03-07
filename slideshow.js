const images = [
    "image1.jpeg",
    "image2.jpg",
    "image3.jpg",
];

let currentIndex = 0;


const slide = document.getElementById("slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateslide()  {
    slide.style.opacity = 0; // fade out
    setTimeout(() => {
        slide.src = images[currentIndex];
        slide.style.opacity = 1; //fade in
    }, 500); //mathc the CSS transition duration

    }
    

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateslide();

});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateslide();
});

// automatic slideshow

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateslide();
}, 3000); //change slide every 3 secs


//Initialize the slideshow
updateslide();