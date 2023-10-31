function Send() {
    let Email = document.getElementById('email');
    let name = document.getElementById('Name');
    let massage = document.getElementById('messageBox');

    if(Email.length !== 0 && name.length !== 0 && massage.length !==0){
        console.log(Email.value);
        Email.value = "";
        console.log(name.value);
        name.value = "";
        console.log(massage.value);
        massage.value = "";
    }
}