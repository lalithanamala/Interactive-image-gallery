
// Select all gallery images
const images = document.querySelectorAll(".gallery-photo");

// Select lightbox elements
const lightbox = document.getElementById("lightbox");
const expandedImage = document.getElementById("expandedImage");

const closeButton = document.getElementById("closeButton");
const previousImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

// Gallery navigation buttons
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

// Current image index
let currentIndex = 0;

// Open selected image
function openImage(index) {

    currentIndex = index;

    expandedImage.src = images[currentIndex].src;
    expandedImage.alt = images[currentIndex].alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}

// Close image
function closeImage() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}

// Show next or previous image
function changeImage(direction) {

    currentIndex =
        (currentIndex + direction + images.length)
        % images.length;

    openImage(currentIndex);
}

// Add click event to all gallery images
images.forEach((image, index) => {

    image.addEventListener("click", function() {

        openImage(index);

    });

});

// Close button
closeButton.addEventListener("click", closeImage);

// Previous and next buttons
previousImage.addEventListener("click", function() {
    changeImage(-1);
});

nextImage.addEventListener("click", function() {
    changeImage(1);
});

// Gallery navigation
previousButton.addEventListener("click", function() {
    openImage((currentIndex - 1 + images.length) % images.length);
});

nextButton.addEventListener("click", function() {
    openImage((currentIndex + 1) % images.length);
});

// Close by clicking outside the photograph
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closeImage();
    }

});

// Keyboard navigation
document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeImage();
    }

    if (event.key === "ArrowRight") {
        changeImage(1);
    }

    if (event.key === "ArrowLeft") {
        changeImage(-1);
    }

});
