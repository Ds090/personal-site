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
        mailValid.innerHTML = "Valid Email Address!"
        mailValid.style.color = "#38bdf8"
    }else if(EmailCopy.length == 0){
        mailValid.innerText = "";
    }
    else{
        mailValid.innerText = "Please Enter Valid Email Address!"  
        mailValid.style.color = "red"
    }
    
}

let section = document.querySelectorAll('.section');
let navLink = document.querySelectorAll('.nav_link');
// let SlidBar = document.querySelector('.slid-bar');

let currentSection = 'home';
window.addEventListener('scroll', () =>{
    // const SlidBars = SlidBar.values
    section.forEach(sections => {
        if (window.scrollY >= (sections.offsetTop - sections.clientHeight / 2)) {
            currentSection = sections.id;
        }
    });

    navLink.forEach(navLinks => {
        if(navLinks.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navLinks.classList.add('active');
        }
        let slid =  document.querySelector('.slid-bar').classList.toggle('right-[-300px]');

    });

});

