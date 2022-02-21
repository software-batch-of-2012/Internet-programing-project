function myfun() {
    const username = document.getElementById('user_name');
    const email = document.getElementById('mail');
    const password1 = document.getElementById('psd');
    const password2 = document.getElementById('c-psd');
    const message = document.getElementsByClassName('message');
   const icon = document.querySelector('i');
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
    else if (password1.value.length < 9) {
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

    

    //return condition//

    if (u == 1 &&  p1 == 1 {
        return true;
    }
    else
        return false;

}