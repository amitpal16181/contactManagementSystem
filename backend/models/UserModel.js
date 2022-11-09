const db = require('../database/data');

async function addOneUser(phoneNumber,userName,password){
    // console.log("we r in model now");
    const result = await db.query(
        `insert into userinfo values("${phoneNumber}","${userName}","${password}")`
    );
    
    return result[0];
}
async function fetchUserInfo(phoneNumber,password){
    // console.log("we r in model now");
    const result = await db.query(
        `select * from userinfo 
        where 
        phoneNumber ="${phoneNumber}" 
        and 
        password = "${password}"`
    );
    
    return result[0];
}
async function fetchAllContacts(phoneNumber){
    // console.log("we r in model now");
    const result = await db.query(
        `select contactNumber,contactName 
        from 
        contactinfo
        where 
        phoneNumber ="${phoneNumber}" 
        `
    );
    
    return result[0];
}

async function addOneContact(phoneNumber, contactNumber, contactName){
    // console.log("we r in model now");
    const result = await db.query(
        `insert into contactinfo values("${phoneNumber}","${contactNumber}","${contactName}")`
    );
    
    return result[0];
}
async function deleteOneContact(phoneNumber, contactNumber){
    // console.log("we r in model now");
    const result = await db.query(
        `
        delete from contactinfo 
        where 
        phonenumber = "${phoneNumber}"
        and
        contactnumber="${contactNumber}"
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
    fetchAllContacts,
    addOneContact,
    deleteOneContact
}