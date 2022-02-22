// Form Blur Event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// Event Handlers
function validateName() {
    const name = document.getElementById('name');
    // The name should have: letters (a-z, A-Z), between 2-10 characters
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    // US zip code should have: 5 numbers, with optional - and 4 extra numbers
    //const re = /^[0-9]{5}(-[0-9]{4})?$/;
    //SG zip code: 6 numbers
    const re = /^[0-9]{6}$/;

    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    // The email should have: (letters,numbers,underscores_,dots.,dashes-)@(etters,numbers,underscores_,dots.,dashes-).(2-5 letters)
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    // US phone num should have:555-555-5555 (-. ) optional
    // const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    // SG phone num: 1234-1234
    const re = /^\d{4}[-. ]?\d{4}$/;

    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}