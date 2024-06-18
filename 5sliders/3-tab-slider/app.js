// current image

const currentImage = document.querySelector('.current-image');


const imageList = document.querySelectorAll('.tab img');

console.log(imageList);

imageList.forEach(image =>{

    image.addEventListener('click', function(evn){
       
       currentImage.src = evn.target.src;
    });

});

// img -> click ->function()
// img -> click ->function()
// img -> click ->function()
// img -> click ->function()
// img -> click ->function()
