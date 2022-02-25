let allImages = document.querySelectorAll('.all-images');
// console.log(allImages);
allImages.forEach(item =>{

    item.addEventListener('click', eventObject =>{

        // console.log(eventObject.target.src);
        document.querySelector('.displayed-image').src = eventObject.target.src;

    });

})