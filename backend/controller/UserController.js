const USER = require("../models/UserModel");
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
};
//useless
async function getUsers(request,res){
    console.log("we r in controller now");
    try {
        const usersdata = await USER.fetchAllUser();
        res.writeHeader(200,headers);
        res.end(JSON.stringify(usersdata));
    } catch (error) {
        console.log(error);
        console.log("problem in controller file");
    }
}

//features
async function checkUser(request,res){
    // console.log("we r in controller now");
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        const obj = JSON.parse(body);
        try {
            const checkResponse = await USER.fetchUserInfo(
                obj['phoneNumber'],
                obj['password'],
            );
            res.writeHeader(200, headers);
            res.end(JSON.stringify(checkResponse));
        } catch (error) {
            console.log(error);
            console.log("problem in controller file");
            console.log("function name : checkUser");
        }
    });
}
async function addUser(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        const obj = JSON.parse(body);
        try {
            const addresponse = await USER.addOneUser(
                obj['phoneNumber'],
                obj['userName'],
                obj['password'],
            );
            res.writeHeader(200, headers);
            res.end(JSON.stringify(addresponse));
        } catch (error) {
            console.log(error);
            console.log("problem in controller file");
            console.log("function name : addUser");
        }
    });
}
async function getContacts(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        const obj = JSON.parse(body);
        try {
            const addresponse = await USER.fetchAllContacts(
                obj['phoneNumber'],
            );
            res.writeHeader(200, headers);
            res.end(JSON.stringify(addresponse));
        } catch (error) {
            console.log(error);
            console.log("problem in controller file");
            console.log("function name : getContacts");
        }
    });
}
async function addContact(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        const obj = JSON.parse(body);
        try {
            const addresponse = await USER.addOneContact(
                obj['phoneNumber'],
                obj['contactNumber'],
                obj['contactName'],
            );
            res.writeHeader(200, headers);
            res.end(JSON.stringify(addresponse));
        } catch (error) {
            console.log(error);
            console.log("problem in controller file");
            console.log("function name : addContact");
        }
    });
}
module.exports = {
    getUsers,
    addUser,
    checkUser,
    getContacts,
    addContact
}