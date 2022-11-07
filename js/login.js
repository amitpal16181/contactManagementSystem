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