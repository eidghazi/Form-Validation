const Submit = document.querySelector(".Submit")
const Reset = document.querySelector(".Reset")
const name1 = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const messageDiv = document.querySelector(".messageDiv")
const country =  document.getElementById("Country")

Submit.addEventListener("click", function () {
    messageDiv.innerHTML = ""

    if (name1.value === "") {
        const message = document.createElement("p")
        message.textContent = "- Name is required"
        messageDiv.appendChild(message)
    }

    if (email.value === "") {
        const message = document.createElement("p")
        message.textContent = "- Email is required"
        messageDiv.appendChild(message)
    }

    if (password.value === "") {
        const message = document.createElement("p")
        message.textContent = "- Password is required"
        messageDiv.appendChild(message)
    }

    const gender = document.querySelector('input[name="gender"]:checked')
    if (!gender) {
        const message = document.createElement("p")
        message.textContent = "- Gender is required"
        messageDiv.appendChild(message)
    }

    const sports = document.querySelector('input[name="Sports"]:checked')
    if(!sports){
        const message = document.createElement("p")
        message.textContent="- Sports are required"
        messageDiv.appendChild(message)
    }

    if(country.value===""){
        const message = document.createElement("p")
        message.textContent="- Country is required"
        messageDiv.appendChild(message)
    }
})

Reset.addEventListener("click",function(){
    location.reload()
})