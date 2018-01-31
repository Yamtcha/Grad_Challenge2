function orchestrateUsers(users) {
    
    var grouplist = { 
        Admin :[],
        Moderator :[],
        User : []
    }
    for(let i = 0 ; i < users.length ; i++){
           if (users[i].type == "Admin"){
               grouplist.Admin.push(users[i]);
           }else if (users[i].type == "Moderator"){
               grouplist.Moderator.push(users[i]);
           }
           else{
               grouplist.User.push(users[i]);
           }
    } 
    return grouplist;
    
}

function searchUsers(orchestratedUsers, userTypes, property, value) {
   
    var SearchArray = [];
    for (let i in userTypes){ // iterative throught the types of users we want to search
        for(let element in orchestratedUsers) { 
            if(element === i){ //compare the type of users in the orchestratedUsers array to those in usertypers array
                  temp = orchestratedUsers[element];
                  for(let x = 0 ; x < temp.length ;x++){
                        if(temp[x].property == value){
                           SearchArray.push(temp[x]);
                        }
                   } 
            }   
        }
   } 
    console.log(SearchArray);
}
users =[
    {
      "name": "Joe",
      "companyId": "A2100",
      "type": "Admin"
    },
    {
      "name": "Jane",
      "companyId": "A2100",
      "type": "Moderator"
    },
    {
      "name": "Smith",
      "companyId": "A2100",
      "type": "User"
    },
    {
      "name": "Smith",
      "companyId": "A2100",
      "type": "User"
    },
    {
      "name": "Rocket",
      "companyId": "A3100",
      "type": "Admin"
    },
    {
      "name": "Rick",
      "companyId": "A3100",
      "type": "User"
    },
    {
      "name": "Tim",
      "companyId": "A4100",
      "type": "Admin"
    }
  ]

array = orchestrateUsers(users);

Admin = array.Admin;
Moderator = array.Moderator;
User = array.User;


userTypes = {Admin,User}; 
//console.log(Admin);

searchUsers(array,userTypes,"companyId","A3100")
