const db = require('../database/data');

async function addOneUser(phonenumber,username,password){
    // console.log("we r in model now");
    const result = await db.query(
        `insert into userinfo values("${phonenumber}","${username}","${password}")`
    );
    
    return result[0];
}
async function fetchUserInfo(phonenumber,password){
    // console.log("we r in model now");
    const result = await db.query(
        `select * from userinfo 
        where 
        phoneNumber ="${phonenumber}" 
        and 
        password = "${password}"`
    );
    
    return result[0];
}
async function fetchAllContacts(phonenumber){
    // console.log("we r in model now");
    const result = await db.query(
        `select contactNumber,contactName 
        from 
        contactinfo
        where 
        phoneNumber ="${phonenumber}" 
        `
    );
    
    return result[0];
}

//useless
async function fetchAllUser(){
    // console.log("we r in model now");
    const result = await db.query(`select * from userinfo`);
    const raw = result[0];
    return raw;
}
module.exports = {
    addOneUser,
    fetchAllUser,
    fetchUserInfo,
    fetchAllContacts
}