const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const slideWidth = slide.clientWidth; // Get the width of the slide
let autoScrollInterval; // Declare a variable to hold the interval

// Function to scroll to the next slide
const scrollToNextSlide = () => {
  slidesContainer.scrollLeft += slideWidth;
};

// Function to scroll to the previous slide
const scrollToPrevSlide = () => {
  slidesContainer.scrollLeft -= slideWidth;
};


// Function to start auto-scrolling
const startAutoScroll = () => {
  autoScrollInterval = setInterval(scrollToNextSlide, 3000); // Adjust the interval (3000ms = 3s) as needed
};

// Function to stop auto-scrolling
const stopAutoScroll = () => {
  clearInterval(autoScrollInterval);
};

// Start auto-scrolling when the page loads
startAutoScroll();

// Optionally, you can stop auto-scrolling when user interacts with the buttons
nextButton.addEventListener("click", stopAutoScroll);
prevButton.addEventListener("click", stopAutoScroll);

// To resume auto-scrolling after interaction, you can start auto-scrolling again after a delay
nextButton.addEventListener("click", () => setTimeout(startAutoScroll, 5000)); // 5 seconds delay
prevButton.addEventListener("click", () => setTimeout(startAutoScroll, 5000)); // 5 seconds delay
