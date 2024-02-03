async function getcombineddata(){
    const [data1,data2]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/1").then((response)=>
        response.json( )
        ),
        fetch("https://jsonplaceholder.typicode.com/posts/1").than((response)
        =
        response.json()
        ),
    ]);
    const combinedata ={
        todo:data1,
        post: data2,
    };
    return combinedata;
}
getcombineddata().then((data)=> console.log(data));
