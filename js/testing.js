window.onload  = function(params) {
    const token = localStorage.getItem("userPhone");
    if (token == undefined || token == null) {
        window.location.replace("../pages/login.html");
        console.log("false");
        return;
    }
    else{
        window.location.replace("../pages/dashboard.html");
    }
    console.log("Working...");
    //--------------------------------------------------
    // const options = {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     // body: JSON.stringify(obj)
    // };
    // fetch("http://localhost:5000/hello",options)
    // .then((response)=>{
    //     return response.json();
    // })
    // .then((response)=>{
    //     console.log(response);
    // })
    // .catch((error)=>{
    //     console.log("problem");
    // })
}