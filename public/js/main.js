const buttonSubmit = document.getElementById("submitUser")
const buttonUsers = document.getElementById("getUsers")
const userList = document.getElementById("users")

buttonSubmit.addEventListener("click", (event) => {
    console.log("button pressed")
    const data = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value
    }

    console.log(data)

    fetch("http://localhost:3000/postUser", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => {console.log(response)})
})

buttonUsers.addEventListener("click", (event) => {
    let data;
    fetch("http://localhost:3000/users").then((response) => response.json()).then((data) => {
        console.log(data)
        for (let index = 0; index < data.length; index++) {
            const {name, email} = data[index];
            console.log({name, email})
            const li = document.createElement("li")
            li.textContent = `Name: ${name}, Email: ${email}`
            userList.append(li)
        }
    })
})