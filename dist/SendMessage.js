function Send() {
    let Email = document.getElementById('email');
    let name = document.getElementById('Name');
    let massage = document.getElementById('messageBox');
    let mailValid = document.getElementById('ValidMail');

    let EmailCopy = Email.value;

    if(EmailCopy.length != 0){
        console.log(Email.value);
        Email.value = "";
        console.log(name.value);
        name.value = "";
        console.log(massage.value);
        massage.value = "";
        mailValid.innerText = "Successfully Send"
        mailValid.style.color = "#912094"
    }else{
        alert('Please Enter any Massage!')
       
    }
    
}

function ValidEmail() {
    let mailValid = document.getElementById('ValidMail');
    let Email = document.getElementById('email');

    let EmailCopy = Email.value

    new RegExp(EmailCopy);

    let ValidEmail = EmailCopy.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);

    if (ValidEmail) {
        mailValid.innerHTML = "Valid Mail!"
        mailValid.style.color = "#38bdf8"
    }else if(EmailCopy.length == 0){
        mailValid.innerText = "";
    }
    else{
        mailValid.innerText = "Please Enter Valid Email Adderss!"  
        mailValid.style.color = "red"
    }
    
}