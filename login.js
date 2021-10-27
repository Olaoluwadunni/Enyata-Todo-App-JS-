const email = document.querySelector('#email'); //email input box
const emailError = document.querySelector('.emailError');
const form = document.querySelector('#form'); //form tag
const password = document.querySelector('#pass'); //password input box
const error = document.querySelector('.error');
const btn = document.querySelector('#logInButton');

const p = document.querySelector('p')

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

// console.log(password);
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


 btn.addEventListener("click", (e) => {
     e.preventDefault();

     const url = 'https://reqres.in/api/login';
     fetch(url, {
         method:'POST',
         headers: {
         Accept: "application/json, text/plain",
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
             email: email.value,
             password: password.value,
         })
     })
     .then((res) => res.json())
     .then(res => {
         if (res.error) {
             return p.textContent = res.error
         }
         p.textContent = 'Login successful'
     }).catch((e) => console.log(e))
 })




 

