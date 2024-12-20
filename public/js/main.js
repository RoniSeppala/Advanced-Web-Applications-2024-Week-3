const buttonSubmit = document.getElementById("submitUser")
const buttonUsers = document.getElementById("getUsers")
const userList = document.getElementById("userList")
const userForm = document.getElementById("userForm")

userForm.addEventListener("submit", (event) => {
    const data = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value
    }


    fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => response.json()).then((data) => {
        console.log(data)
    })
})

buttonUsers.addEventListener("click", (event) => {
    userList.innerHTML = ""
    let data;
    fetch("http://localhost:3000/users").then((response) => response.json()).then((data) => {
        for (let index = 0; index < data.users.length; index++) {
            const {name, email} = data.users[index];
            console.log({name, email})
            const li = document.createElement("li")
            li.textContent = `${name} - ${email}`
            userList.append(li)
        }
    })
})