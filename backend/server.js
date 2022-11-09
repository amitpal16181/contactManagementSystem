const http = require("http");

const {
    getUsers,
    addUser,
    checkUser,
    getContacts,
    addContact,
    deleteContact
}  = require("./controller/UserController");

const server = http.createServer((request, res) => {
    if (request.url === "/api/add/user" && request.method === "POST") {
        addUser(request, res);
    } else if (request.url === "/api/login" && request.method === "POST") {
        checkUser(request, res);
    } else if (request.url === "/api/add/contact" && request.method === "POST") {
        addContact(request, res);
    } else if (request.url === "/api/contacts" && request.method === "POST") {
        getContacts(request, res);
    } else if (request.url === "/api/delete/contact" && request.method === "POST") {
        deleteContact(request,res);
    } else {
        console.log("hit 3");
        getUsers(request, res);
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));