const form = document.querySelector('.sign-up');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', event => {
    event.preventDefault();

    // validation
    const username = form.username.value;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'that username is valid';
    }
    else{
        feedback.textContent = 'username must contain letters only & between 6 & 12 charecters';
    }
});

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
       form.username.setAttribute('class', 'success')
    }
    else{
        form.username.setAttribute('class', 'error')
    }
})
// testing Regex
// const username = 'okedooo';
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if(pattern){
//     console.log('password is correct');
// }
// else{
//     console.log('password is wrong');
// }

// let result = username.search(pattern);

// console.log(result);

