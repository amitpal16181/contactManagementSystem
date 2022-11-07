window.onload  = function(params) {
    console.log("hn hogyi");
    //--------------------------------------------------
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify(obj)
    };
    fetch("http://localhost:5000/hello",options)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log("problem");
    })
}