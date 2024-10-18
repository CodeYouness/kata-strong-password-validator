const input = document.getElementById('password');
const inputLength = document.getElementById('length')
const inputNumber = document.getElementById('number')
const inputUppercase = document.getElementById('uppercase')
const inputCharacter = document.getElementById('special-character')

// event listener per sentire se avviene un cambiamento
// "input" -> tipo di event listener
function passwordCheck() {

    const password = input.value;
    let strength = 0;

    if (password.length >= 9) {
        inputLength.textContent = "✅";
        inputLength.classList.add("green");
        inputLength.classList.remove("red");
        strength++;
    } else {
        inputLength.textContent = "❌";
        inputLength.classList.add("red");
        inputLength.classList.remove("green");
    }
}
input.addEventListener('input', passwordCheck);