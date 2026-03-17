const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let currentSlide = 0;

// Function to show the current slide and hide the rest
function showSlide() {
    slides.forEach((slide, index) => {
        id (index === currentSlide) {
            slide.computedStyleMap.display = 'block';
        } else {
            slide.computedStyleMap.display = 'none';
        }
    })
}

// Event listeners for the arrow buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide();



let stars = document.querySelectorAll('.ratings span');
let products = document.querySelectorAll('.ratings');
let ratings = [];

for(let star of stars){
    star.addEventListener("click", function(){

        let children = star.parentElement.children;
        for(let child of children){
            if(child.getAttribute("data-clicked")){
                return false;
            }
        }

        this.setAttribute("data-clicked", "true");
        let rating = this.dataset.rating;
        let productId = this.parentElement.dataset.productid;
        let data = {
           "rating": rating,
           "product-id": productId,
        }
        ratings.push(data);
        sessionStorage.setItem("rating", JSON.stringify(ratings));
    });
}

if(sessionStorage.getItem("rating")){
  ratings = JSON.parse(sessionStorage.getItem("rating"));
  for(let rating of ratings){
    for(let product of products){
      if(product.dataset.productid == rating["product-id"]){
        let reverse = Array.from(product.children).reverse();
        let index = parseInt(rating["rating"]) - 1;
        reverse[index].setAttribute("data-clicked", "true");
      }
    }
  }
}

document.getElementById('upload-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const imageInput = document.getElementById('image');
  const contentInput = document.getElementById('content').value;
  const resultDiv = document.getElementById('topreviews');

  const uploadedImage = document.createElement('img');
  uploadedImage.src = URL.createObjectURL(imageInput.files[0]);
  uploadedImage.alt = 'Uploaded Image';

  const divele = document.createElement("div");
  const para = document.createElement("p");
  para.textContent = contentInput;

  // Append the image and content to the result div
  divele.appendChild(uploadedImage);
  divele.appendChild(document.createElement('br')); // Add a line break
  divele.appendChild(para);
  resultDiv.appendChild(divele);

  // Clear the form inputs
  imageInput.value = '';
  contentInput.value = '';
});