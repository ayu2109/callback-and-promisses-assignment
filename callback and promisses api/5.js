function greet(){
    return new promise ((resolve)=>{
        const greeting = `Hello,${name}!`;
        resolve(greeting);
    });

}
greet("Mithun").then((message)=> console.log(message));