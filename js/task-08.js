const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", formCallback);

function formCallback(event){
    event.preventDefault();

    const email = loginFormEl.elements.email.value;
    const password = loginFormEl.elements.password.value;

    if(email === "" || password === "" ){
        alert("Заповніть будьласка всі поля!!!");
        return;
    }
    const dataLogin = {
        email,
        password,
    };

    console.log(dataLogin);

    loginFormEl.reset();
};
