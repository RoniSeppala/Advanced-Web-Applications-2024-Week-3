const button = document.getElementById("submitUser")

button.addEventListener("click", (event) => {
    console.log("button pressed")
    event.preventDefault()
    const data = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value
    }

    console.log(data)

    fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => {console.log(response)})
})