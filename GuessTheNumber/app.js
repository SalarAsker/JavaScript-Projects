// get elemet by its id user defined function
function $(id){
    return document.getElementById(id);
}
// random numbers
let random = Math.ceil(Math.random()*15);
// get the guess button, listen for click event, call the function
$('btn_guess').addEventListener('click',function(){

    // user input
    const userInput = $('user_guess').value;
    // userinfo
    const userInfo =$('hints');
    // validation
    if(isNaN(userInput) || userInput ===''){
        userInfo.innerHTML = 'Enter only numbers!';
        return;
    }
    if(userInput >= 1 && userInput <=15){
        // game logic here
        if(userInput > random){
            userInfo.innerHTML = 'Your guess is higher';
        }
        if(userInput < random){
            userInfo.innerHTML = 'Your guess is lower';
        }
        if(userInput == random){
            userInfo.innerHTML = 'Your guess is right. It was ' + random;
            const gamePanel = document.querySelector('.game_panel');
            gamePanel.classList.add('hidden');
            $('play_again').classList.remove('hidden');

        }

    }else{
        userInfo.innerHTML = 'Enter numbers between 1 to 15';
    }



});

// play again
$('play_again').addEventListener('click', function(){
    window.location.reload();
});