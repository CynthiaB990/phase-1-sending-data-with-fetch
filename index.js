function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    // method: "POST" 
    const configurationObject = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            let h2 = document.createElement("h2");
            h2.innerHTML = obj.id;
            document.body.appendChild(h2);
            console.log(obj);
        })
        .catch(function (error) {
            alert("Unauthorized Access");
            let h3 = document.createElement("h3");
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);

        });
}