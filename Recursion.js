let total = 0

function add(data){
   for(let i in data){

      if(typeof data[i] === 'object'){
            add(data[i]);
      }else if(data["total"]){
            total+=data[i];
      }
    }
    return total;
}    

var data = [
   {
        "total": 10,
        moreData: {
             "total":10
       }
   },
   {
        "total": 10,
        moreData: {
            "total":10,
            moreData: {
                "total": 10
           }
        }
   },
   {
       "total": 10
   }
];

add(data);
console.log(total);
