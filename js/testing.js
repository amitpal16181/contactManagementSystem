window.onload  = function(params) {
    const token = localStorage.getItem("userPhone");
    if (token == undefined || token == null) {
        
    }
    else{
        window.location.replace("../pages/dashboard.html");
    }
    console.log("Welcome to Contact Management System. Use applicaion, not the console you kid...");
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