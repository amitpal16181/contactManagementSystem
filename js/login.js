//making plugin location-aware
//this function should always be at the top of intl-tel-info start code
function getIP(callback) {
        fetch("https://ipinfo.io/json?token=6f6c254dc7e7de", { headers: { 'Accept': 'application/json' } })
                .then((response) => response.json())
                .catch(() => { return { country: 'in', }; })
                .then((response) => callback(response.country));
}

//intl-tel-info start code
//we can also add prefered counties and they will be presented at the top
const phoneInputField = document.querySelector("#userph");
const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: getIP,
        preferredCountries: ['in', 'us', 'co', 'de'],
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

//onSubmit function
document.getElementById("submitBtn").addEventListener("click", (e) => {
        e.preventDefault();
        // console.log("click");
        const phoneNumber = document.getElementById("userph").value.trim();
        const password = document.getElementById("pass").value.trim();
        const obj = {
                phoneNumber,
                password
        }
        // console.log(obj);
        const options = {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
        };
        fetch("http://localhost:5000/api/login", options)
                .then((response) => {
                        return response.json();
                })
                .then((response) => {
                        console.log(response);
                        if(response.length==0){
                                alert("userName or password is invalid!!");
                                return;
                        }
                        else{   
                                localStorage.setItem("userPhone",response[0].phoneNumber);
                                localStorage.setItem("userName", response[0].userName);
                                // window.location.href = "./dashboard.html";
                                window.location.replace("./dashboard.html");
                        }
                        
                })
                .catch((error) => {
                        console.log("problem in frontend");
                })
        

})