function MergeArrays(Array1 , Array2){
   
    for (let i = 0 ; i < Array1.length ; i++){
        for(let x = 0 ; x < Array2.length ; x++){
             if(Array1[i]._id === Array2[x]._id){ // Check if the _id is the same
                Array2[x] = Object.assign(Array2[x],Array1[i]) //Merge the two arrays
             }
        } 
    }
    console.log(Array2)
} 

var Data1 = [
    {
       "_id": "23",
       "name":{
           "first": "Letha",
           "last" : "Dodson"
       },
       "company": "GEEKY"
    },
    {
        "_id": "25",
        "name":{
            "first": "Le",
            "last" : "Do"
        },
        "company": "GE"
     }
]

var Data2 = [
    {
       "_id": "23",
       "address":"P154 khayelitsha 7784 ",
       "phone": "074 5595 871 "
    },
    {
        "_id": "25",
        "address":"BM1149 Harare 7784 ",
        "phone": "071 816 4544 "
     }
]

MergeArrays(Data1,Data2);