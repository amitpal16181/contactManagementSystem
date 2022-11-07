window.onload = function (params) {
    // console.log("we r in dashboard now");
    const token = localStorage.getItem("userphone");
    if(token==undefined || token==null){
        window.location.href= "./login.html";
        return;
    }
    const phonenumber = localStorage.getItem("userphone");
    // console.log(ph);
    const obj = {
        phonenumber
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
        console.log(response);

    })
    .catch((error) => {
        console.log("problem in frontend");
    })
}