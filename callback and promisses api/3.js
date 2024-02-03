const person ={
    firstname: "Mithun",
    lastname: "S",
    age: 20,
};
function ageindays(personobject, callback){
    const fullname= `${personobject.firstname} ${personobject.lastname}`;
    const ageindays= personobject.age*365;
    callback(fullname, ageindays);
}
function logresult(fullname, ageindays){
    console.log(
        `The person's full name is ${fullname} and their age in days is ${agedays}.`);

    
}