const text_area = document.querySelector('.text-area');
const char_count = document.querySelector('.char-count');

text_area.addEventListener('keyup', function(){

    char_count.innerHTML = text_area.value.length;

});

document.querySelector('.clear').addEventListener('click', function(){

    window.location.reload();
});