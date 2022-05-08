function myfun() {
    const username = document.getElementById('user_name');
    const email = document.getElementById('mail');
    const password1 = document.getElementById('psd');
    const password2 = document.getElementById('c-psd');
    const message = document.getElementsByClassName('message');
  // const icon = document.querySelector('i');
   const sucess = document.getElementsByClassName('sucess');
   const error = document.getElementsByClassName('error');

    //submit sucess variable
    let u = 0;
    let e = 0;
    let p1 = 0;
    let p2 = 0;



    //validation for username//
    if (username.value == "") {
        username.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color = 'red';
        message[0].innerText = "Username cannot be blank";
        error[0].style.visibility = 'visible';
        error[0].style.color = 'red';
        u = 0;
    }
    else if (username.value.length < 3 && username.value.length > 0) {
        username.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color = 'red';
        message[0].innerText = "Username have atleast 3 character";
        error[0].style.visibility = 'visible';
        error[0].style.color = 'red';
        u = 0;
    }
    else if (username.value.length > 3 && (isNaN(parseFloat(username.value)))) {
        username.style.borderColor = 'green';
        error[0].style.visibility = 'hidden';
        message[0].style.visibility = 'hidden';
        sucess[0].style.visibility = 'visible';
        sucess[0].style.color = 'green';
        u = 1;


    }
    else {
        username.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color = 'red';
        message[0].innerText = "Number is not allowed in the beggining";
        error[0].style.visibility = 'visible';
        error[0].style.color = 'red';
        u = 0;

    }
    //email validation//

    if (email.value == "") {
        email.style.borderColor = 'red';
        message[1].style.visibility = 'visible';
        message[1].style.color = 'red';
        message[1].innerText = "Email cannot be blank";
        error[1].style.visibility = 'visible';
        error[1].style.color = 'red';
        e = 0;
    }
    else if (email.value.indexOf('@') < 3 || email.value.lastIndexOf('.') >= email.value.length - 2) {
        email.style.borderColor = 'red';
        message[1].style.visibility = 'visible';
        message[1].style.color = 'red';
        message[1].innerText = "Invalid email";
        error[1].style.visibility = 'visible';
        error[1].style.color = 'red';
        e = 0;
    }
    else {
        email.style.borderColor = 'green';
        error[1].style.visibility = 'hidden';
        message[1].style.visibility = 'hidden';
        sucess[1].style.visibility = 'visible';
        sucess[1].style.color = 'green';
        e = 1;
    }
    //validation of password//

    var numbers = /[0-9]/g;
    if (password1.value == "") {
        password1.style.borderColor = 'red';
        message[2].style.visibility = 'visible';
        message[2].style.color = 'red';
        message[2].innerText = "Password cannot be blank";
        error[2].style.visibility = 'visible';
        error[2].style.color = 'red';
        p1 = 0;
    }
    else if (password1.value.length < 8) {
        password1.style.borderColor = 'red';
        message[2].style.visibility = 'visible';
        message[2].style.color = 'red';
        message[2].innerText = "Password must be minimum 8 character";
        error[2].style.visibility = 'visible';
        error[2].style.color = 'red';
        p1 = 0;
    }

    else if (!(password1.value.match(numbers))) {
        password1.style.borderColor = 'red';
        message[2].style.visibility = 'visible';
        message[2].style.color = 'red';
        message[2].innerText = "Password have atleast a number";
        error[2].style.visibility = 'visible';
        error[2].style.color = 'red';
        p1 = 0;
    }

    else {
        password1.style.borderColor = 'green';
        error[2].style.visibility = 'hidden';
        message[2].style.visibility = 'hidden';
        sucess[2].style.visibility = 'visible';
        sucess[2].style.color = 'green';
        p1 = 1;
    }

    //password check//
    if (password2.value == "") {
        password2.style.borderColor = 'red';
        message[3].style.visibility = 'visible';
        message[3].style.color = 'red';
        message[3].innerText = "Password cannot be blank";
        error[3].style.visibility = 'visible';
        error[3].style.color = 'red';
        p2 = 0;
    }
    else if (password1.value != password2.value) {
        password2.style.borderColor = 'red';
        message[3].style.visibility = 'visible';
        message[3].style.color = 'red';
        message[3].innerText = "Password doesnot match";
        error[3].style.visibility = 'visible';
        error[3].style.color = 'red';
        p2 = 0;
    }
    else {
        password2.style.borderColor = 'green';
        error[3].style.visibility = 'hidden';
        message[3].style.visibility = 'hidden';
        sucess[3].style.visibility = 'visible';
        sucess[3].style.color = 'green';
        p2 = 1;
    }

    //return condition//

    if (u == 1 && e == 1 && p1 == 1 && p2 == 1) {
        return true;
    }
    else
        return false;

}