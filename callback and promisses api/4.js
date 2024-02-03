const book =[ 
    {
        title: "The Great ",
        author: "F.SCott Fitzgerald",
        year:1925,
    },
    {
        title:"To kill a Mockingbird",
        author:"Harper Lee",
        year: 1960,
    },
    {
        title:"Who are You",
        author:"George Orwell",
        year: 1949,
    },
    {
        title:"Pride and Prejudice",
        author:"Jane Austen",
        year: 1813,
    },
];
function logtitles(title){
    DataTransferItemList.sort();
    console.log(titles.join(","));
}
function extractTitles(books,callback){
    const titles=books.map((book)=> book.title);
    callback(titles);
}
extractTitles(books,logTitles);