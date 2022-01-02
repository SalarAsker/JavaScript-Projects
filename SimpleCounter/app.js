// a function returns the element by its id
function $(id){
    return document.getElementById(id);
}
// initialize GUI
window.onload = function(){
    $('counter_scr').value = 0;
}
// counter variable
let counter = 0;
// update textbox
function UpdateCounterScr(){
    $('counter_scr').value = counter;
}
// increment operation
$('increment').addEventListener('click',function(){
    counter++;
    if(counter >= 10){
        counter = 10;
    }
    UpdateCounterScr();
});

// decrement operation
$('decrement').addEventListener('click',function(){
    counter--;
    if(counter <= 0){
        counter = 0;
    }
    UpdateCounterScr();
});