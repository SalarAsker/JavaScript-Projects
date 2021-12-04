// get the span element
const showHidePass = document.getElementById('show-hide');
// listen for the click event and call a function
showHidePass.addEventListener('click', ShowHideToggle);
let showPassword = false; 
// false: open eye icon, hidden password
// true: eye shut icon, password in clear text
// repeat pattern
function ShowHideToggle(){
    showPassword = !showPassword;
    if(showPassword){
        document.getElementById('show-hide').innerHTML = 'visibility_off';
        document.getElementById('user-password').setAttribute('type','text');
    }else{
        document.getElementById('show-hide').innerHTML = 'visibility';
        document.getElementById('user-password').setAttribute('type','password');
    }
    
}