let para = document.getElementById('text');
console.log(para);
let bluBtn = document.getElementById('blue');
console.log(bluBtn);
let redBtn = document.getElementById('red');
console.log(redBtn);

bluBtn.addEventListener('click', function(){
    para.style.color = 'blue';
})

redBtn.addEventListener('click',function(){

    para.style.color = 'red';

})