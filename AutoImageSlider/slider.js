// get all the images
const images = [
    'img/a.jpg',    // index 0
    'img/b.jpg',    // index 1
    'img/c.jpg',    // index 2
    'img/d.jpg',    // index 3
    'img/e.jpg'     // index 4
];
const firstImage = 0;
const lastImage = images.length -1;
let rotate = 0;
//DOMContentLoaded
document.addEventListener('DOMContentLoaded', Slide);

function Slide(){
    // get image tag
    const imageElement = document.getElementById('image');
    // assign image
    imageElement.src = images[rotate];
    rotate++;
    if(rotate > lastImage){
        rotate = firstImage;
    }
}
setInterval(function() {
    Slide();
}, 1500);
