// get the checkbox in the JS
const showPassCheckBox = document.getElementById('show-password');
// bind click event and call a function
showPassCheckBox.onclick = function(){
    if(showPassCheckBox.checked){
       document.getElementById('user-password').setAttribute('type','text'); 
    }else{
        document.getElementById('user-password').setAttribute('type','password'); 
    }
    
}