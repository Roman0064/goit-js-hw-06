const inputEl = document.querySelector('#validation-input');

function funcValOnInv(){
    const inputLength = inputEl.value.length;
    const reqInput = Number(inputEl.dataset.length);

    if(inputLength === reqInput){
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }else{
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
}
inputEl.addEventListener("blur", funcValOnInv);