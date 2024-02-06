// // Element Selector
const dice1 =  document.querySelector('.dice1');
const dice2 =document.querySelector('.dice2');
const btnRoll = document.getElementById('btn-roll');

// Register click on dice roll
document.getElementById('btn-roll')
.addEventListener('click', function(){
   btnRoll.disabled = true;
    RollDice();
});

// Function to execute Dice Roll
 const RollDice = () =>{
     // Animate Dices to Roll
     if(!dice1.classList.contains('animation'))
     dice1.classList.add('animation')
    
     if(!dice2.classList.contains('animation'))
         dice2.classList.add('animation')
   
                setTimeout(() => {
                     // Get Random values for dices
                 let d1 = GetDice(); // 2
                 let d2 = GetDice();
                 // set dices to random values 
                 document.querySelector('.dice1').src = `img/dice-${d1}.png`;
                 document.querySelector('.dice2').src = `img/dice-${d2}.png`;

                 let sum = d1 + d2;
                 document.getElementById('dice-sum').innerText = sum;
                 
                 // remove rolling animation
                 if(dice1.classList.contains('animation'))
                 dice1.classList.remove('animation')
                
                 if(dice2.classList.contains('animation'))
                     dice2.classList.remove('animation')

                     btnRoll.disabled = false;
               }, 2000);
             
}
// generate random dice
function GetDice(){
    return Math.ceil(Math.random() * 6); // 1-6
}