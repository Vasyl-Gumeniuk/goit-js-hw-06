const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: {email, password}
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Будь ласка, заповніть усі поля форми!");
    }
    const userRegisterData = {};
        userRegisterData.email = email.value,
        userRegisterData.password = password.value
    
    console.log(userRegisterData);
  event.currentTarget.reset();
};
