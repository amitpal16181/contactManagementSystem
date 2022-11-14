window.onload = function (params) {
    console.log("we r in dashboard now");
    const token = localStorage.getItem("userPhone");
    if (token == undefined || token == null) {
        window.location.replace("./login.html");
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
                    html = html + `
                    <tr>
                        <td>${response[i].contactName}</td>
                        <td>${response[i].contactNumber}</td>
                        <td class="modify"><i class="fa-regular fa-pen-to-square"></i></td>
                        <td class="delete"><i class="fa-solid fa-trash"></i></td>
                    </tr>`;
                }
                bodyData.innerHTML = html;
                document.querySelectorAll(".modify").forEach(node=>{
                    node.addEventListener("click",(e)=>{
                        const className = e.target.className;
                        let contactNumber = null;
                        if(className=="modify"){
                            contactNumber = e.target.parentNode.children[1].textContent.trim();
                        }
                        else{
                            contactNumber = e.target.parentNode.parentNode.children[1].textContent.trim();
                        }
                        // console.log(contactNumber);
                    })
                })
                document.querySelectorAll(".delete").forEach(node=>{
                    node.addEventListener("click",(e)=>{
                        const className = e.target.className;
                        let contactNumber = null;
                        if(className=="delete"){
                            contactNumber = e.target.parentNode.children[1].textContent.trim();
                        }
                        else{
                            contactNumber = e.target.parentNode.parentNode.children[1].textContent.trim();
                        }
                        // console.log(contactNumber);
                        const options = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                phoneNumber : phoneNumber,
                                contactNumber:contactNumber
                            })
                        };
                        fetch("http://localhost:5000/api/delete/contact",options).
                        then((response)=>{
                            window.location.reload();
                        })
                    })
                })
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
        localStorage.removeItem("userPhone");
        localStorage.removeItem("userName");
        // window.location.href = "./login.html";
        window.location.replace("../index.html");
        
    });

    document.getElementById("addBtn").addEventListener("click", (e) => {
        window.location.href = "./addContact.html";
    });
}