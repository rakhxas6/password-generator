let buttonEl = document.getElementById("button")
let passwordEl = document.getElementById("passwordG")
passwordEl.value = '';


buttonEl.addEventListener("click" , ()=>{
    let password = passwordGen()
    passwordEl.value = password;
})

function passwordGen(){
    const length = 16
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-='
    let password = ''
    for (let i= 0, n = charset.length; i < length ; i ++){
        password += charset.charAt(Math.floor(Math.random() * n))
    }
    return password
}