const Submit = document.querySelector(".Submit")
const Reset = document.querySelector(".Reset")
const name1 = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const country = document.getElementById("Country")
const messageDiv = document.createElement("div")

messageDiv.classList.add("messageDiv")
document.querySelector("form").appendChild(messageDiv)


const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function createMessageEl(message) {
    const message1 = document.createElement("p")
    message1.textContent = message
    messageDiv.appendChild(message1)
}




Submit.addEventListener("click", function () {
    messageDiv.innerHTML = ""

    if (name1.value === "") {
        createMessageEl("- Name is required")
    }

    if (email.value === "") {
        createMessageEl("- Email is required")
    } else if (!EMAIL_REGEX.test(email.value)) {
        createMessageEl("- Email is not Valid")
    }

    if (password.value==="" ) {
        createMessageEl("- Password is required")
    }else if(password.value.length < 8){
        createMessageEl("- Password must be 8 chars at least")
    }

    const gender = document.querySelector('input[name="gender"]:checked')
    if (!gender) {
        createMessageEl("- Gender is required")
    }

    const sports = document.querySelectorAll('input[name="Sports"]:checked')
    if (sports.length===0) {
        createMessageEl("- Sports are required")
    }else if(sports.length<2){
        createMessageEl("- Please select at least two sports")
    }

    if (country.value === "") {
        createMessageEl("- Country is required")
    }
})

Reset.addEventListener("click", function () {
    location.reload()
})