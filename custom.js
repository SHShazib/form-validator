const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// ----------------============//////////////////////////////================---------------

// Show success 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Show Error massage
function showError(input , massage){
    const formControl  = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = massage;
}
// Get field name 
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// ----------------============//////////////////////////////================---------------


// Email validation 
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
            showSuccess(input);
    }
    else{
            showError(input, 'Email is not valid');
    }
}

// Check Required
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input) } is required`);
        }
        else{
            showSuccess(input);
        }
    })
}
// Check Length
function checkLength(input, min, max){
    if(input.value.length < min ){
         showError(input, `${getFieldName(input) } must be at least ${min} characters`);
    }
    else if(input.value.length > max ){
         showError(input, `${getFieldName(input) } must be less than ${max} characters`);
    }
    else {
         showSuccess(input);
    }
}

// Password Matching 
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input, 'Password do not match.')
    }
}
// ----------------============//////////////////////////////================---------------


// Submit button
form.addEventListener('submit', function(e){
        e.preventDefault();
        
        checkRequired([username,email,password,password2]);
        checkLength(username, 5, 12);
        checkLength(password, 6, 16);
        checkEmail(email);
        checkPasswordMatch(password, password2);
})





// // Submit button with if condition

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     if(username.value == ''){
//         showError(username, 'Username is required');
//     }
//     else{
//         showSuccess(username);
//     }
//     if(email.value == ''){
//         showError(email, 'Email is required');
//     }
//     else if (!validateEmail(email.value)){
//         showError(email, 'Email is not valid');
//     }
//     else{
//         showSuccess(email);
//     }
//     if(password.value == ''){
//         showError(password, 'Password is required');
//     }
//     else{
//         showSuccess(password);
//     }
//     if(password2.value == ''){
//         showError(password2, 'Password confirmation is required');
//     }
//     else{
//         showSuccess(password2);
//     }
// })

