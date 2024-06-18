
// select image tag

const imageElement = document.querySelector('.img');
// contorl variables
const firstImage = 1;
const lastImage = 5;
let currentImage = 1;

// program dots
const dots = document.querySelectorAll('.dots .dot');

dots.forEach(d => {
    d.addEventListener('click', (e) => {

        currentImage = e.target.id;
        imageElement.src = `img/nature_${currentImage}.jpg`;

        RemoveActiveClass();
        e.target.classList.add('active');

    });
})

// next
document.querySelector('.next')
    .addEventListener('click', () => {
        currentImage++;

        if (currentImage > lastImage) {
            currentImage = firstImage;
        }
        UpdatePage();
    });


// next
document.querySelector('.prev')
    .addEventListener('click', () => {
        currentImage--;

        if (currentImage < firstImage) {
            currentImage = lastImage;
        }

        UpdatePage();
      
    });

function UpdatePage() {

     imageElement.src = `img/nature_${currentImage}.jpg`;

    RemoveActiveClass();
    document.getElementById(currentImage).classList.add('active');

}

function RemoveActiveClass() {
    // remove active class
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains('active')) {
            dots[i].classList.remove('active');
        }
    }
}