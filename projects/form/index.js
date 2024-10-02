function setAnswer(obj) {
    const greeting = obj.parentElement;
    const name = greeting.querySelector('.greeting__name__input').value;
    const surname = greeting.querySelector('.greeting__surname__input').value;
    
    greeting.querySelector(".greeting__answer__span").textContent = "Здравствуй, " + name + " " + surname + "!";
}