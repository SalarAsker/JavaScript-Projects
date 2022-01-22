// array of images
const images = [
    'img/a.jpg',    // index 0 --> images[0]
    'img/b.jpg',    // index 1 --> images[1]
    'img/c.jpg',    // index 2 --> images[2]
    'img/d.jpg',    // index 3 --> images[3]
    'img/e.jpg'     // index 4 --> images[4]
];
const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{

        // get image tag
        const imageTag = document.getElementById('image');
        currentImage++; // 1
        if(currentImage >= lastImage){
            currentImage = 4;
        }
        imageTag.src = images[currentImage];
        document.getElementById('info').innerHTML = (currentImage +1) + '/5';

});
// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click', ()=>{

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage--; // 1
    if(currentImage <= firstImage){
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage +1) + '/5';

});