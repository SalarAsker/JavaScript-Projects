const slides = document.querySelectorAll('.slide');

slides.forEach((slide) =>{
    slide.addEventListener('click', ()=>{
        removeCurrentActive();
        slide.classList.add('active');
    })
});

function removeCurrentActive(){
    slides.forEach((slide) =>{
        slide.classList.remove('active');
    })
}

