const http = require("http");
const {
    getUsers,
    addUser,
    checkUser,
    getContacts
}  = require("./controller/UserController");
const server = http.createServer((request, res) => {
    if (request.url === "/api/add/user" && request.method === "POST") {
        addUser(request, res);
    } else if (request.url === "/api/login" && request.method === "POST") {
        checkUser(request, res);
    } else if (request.url === "/api/contacts" && request.method === "POST") {
        getContacts(request, res);
    } else {
        console.log("hit 3");
        getUsers(request, res);
    }
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));