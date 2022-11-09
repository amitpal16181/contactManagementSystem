window.onload = function (params) {
    // console.log("we r in dashboard now");
    const token = localStorage.getItem("userPhone");
    if (token == undefined || token == null) {
        window.location.href = "./login.html";
        return;
    }
    const phoneNumber = localStorage.getItem("userPhone");
    const userName = localStorage.getItem("userName");
    // console.log(ph);
    const obj = {
        phoneNumber
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    };
    fetch("http://localhost:5000/api/contacts", options)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            // console.log(response);
            document.getElementById("userName").innerText = userName;
            var bodyData = document.getElementById("tableBody");
            if (response.length > 0) {
                let html = "";
                for (var i = 0; i < response.length; i++) {
                    html = html + `<tr><td>${response[i].contactName}</td><td>${response[i].contactNumber}</td><td class="modify"><i class="fa-regular fa-pen-to-square"></i></td><td class="delete"><i class="fa-solid fa-trash"></i></td></tr>`;
                }
                bodyData.innerHTML = html;
            }
            else {
                let html = `<tr>No Data Found</tr>`;
                bodyData.innerHTML = html;
            }

        })
        .catch((error) => {
            console.log("problem in frontend");
        });

    document.getElementById("logoutBtn").addEventListener("click", (e) => {
        window.location.href = "./login.html";
    });

    document.getElementById("addBtn").addEventListener("click", (e) => {
        window.location.href = "./addContact.html";
    });
}