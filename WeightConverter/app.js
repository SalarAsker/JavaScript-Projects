// define click eventhandler
const calcBtn = document.getElementById('calc');
calcBtn.addEventListener('click',function(){

    // input textbox
    const weightInKg = parseFloat(document.getElementById('weight_kg').value);
    // input radiobutton
    const unitOption = document.querySelector('input[name="unit"]:checked').value;
    // console.log(unitOption);
    document.getElementById('result').innerHTML = GetWeight(weightInKg,unitOption);

});
// weight converter function
function GetWeight(kg,up){
    if(up == 'pound'){
        return kg*2.2046 + 'pounds'
    }
    if(up == 'ounce'){
        return kg*35.274 + 'ounce';
    }
    if(up == 'gram'){
        return kg*1000 + 'gram';
    }

}