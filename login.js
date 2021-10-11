const email = document.querySelector('#email');
const emailError = document.querySelector('.emailError');

email.onblur = function (event) {
    console.log(event.target.value)
    let content = event.target.value;
    if (content.includes("@") === false)    {
       emailError.textContent = (`${content} is not a correct email format. Please try again`)
       email.classList.add('invalid')
    }
}
email.onfocus = function () {
    emailError.textContent = ""
}

// email.onfocus = function() {
//     if (this.classList.includes('invalid')) {
//         this.classList.remove('invalid')
//     }
//     // this.classList.add('valid');
// }
const password = document.querySelector('#pass');
const error = document.querySelector('.error')
console.log(password);
 password.onblur  = function(event) {
     console.log(event.target.value)
     let pass = event.target.value;
     if (pass.length < 8 ) {
         error.textContent = "minimum password length is eight character" ;
     }
 }
 password.onfocus = function () {
     error.textContent = ""
 }
