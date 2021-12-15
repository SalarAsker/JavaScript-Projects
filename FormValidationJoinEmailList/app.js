// function return the element by its id
function $(id){
	return document.getElementById(id);
}
// put cursor in the first textbox
window.onload = function(){
	$('email_address1').focus();
}
// deactivate the submit event
$('email_form').addEventListener('submit',function(e){
	e.preventDefault();
});
// do validation
$('email_list').addEventListener('click',Validation);
function Validation(){
	const email1 = $('email_address1').value.trim();
	const email2 = $('email_address2').value.trim();
	const name = $('name').value.trim();
	let isValid = true;

		if(email1 ===''){
			$('email_address1_error').innerHTML = 'The field is required';
			isValid = false;
		}else{
			$('email_address1_error').innerHTML = '*';
		}

		if(email1 !== email2){
			$('email_address2_error').innerHTML = 'Email adress is not same!';
			isValid = false;
		}else{
			$('email_address2_error').innerHTML = '*';
		}
		
		if(name ===''){
			$('name_error').innerHTML = 'The field is required';
			isValid = false;
		}else{
			$('name_error').innerHTML = '*';
		}

		if(isValid){
			$('email_form').submit();
		}
}
