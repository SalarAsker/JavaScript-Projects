// selectio of the html
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let saveNumbersAndSign = []; //5,+,5
let expression = ""; // 5+5, 5+5/6*2


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // whole calculator code here
        let value = btn.textContent;

        // logic flow
        if (value == "CLEAR") {
            saveNumbersAndSign = [];
            expression = "";
            screen.textContent = "0";

        } else if (value === "=") {
            try {
                if (expression != 0) {
                    let result = eval(expression);
                    screen.textContent = result;
                    expression = "";
                    saveNumbersAndSign = [];
                    saveNumbersAndSign.push(result);
                }
            }catch(err){
                console.error('invalid expression');
                screen.textContent ="Invalid.";
                expression = "";
                saveNumbersAndSign = [];
            }
       
      

     } else {
            saveNumbersAndSign.push(value);
            expression = saveNumbersAndSign.join("");
            screen.textContent = expression;
        }
        //  saveNumbersAndSign.push(value);
        //  console.log(saveNumbersAndSign);
        //  console.log(saveNumbersAndSign.join(""));

    });
});