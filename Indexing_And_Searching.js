function orchestrateUsers(users) {
    // Add code here
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
    //console.log(grouplist);
    return grouplist;
    
}
//I tried using filter but was not winning at all since i am still getting used to Javascript functions so i used another alternative. 
function searchUsers(orchestratedUsers, userTypes, property, value) {
    var SearchArray = [];
    for (i in userTypes){
        switch(i) {
            case 'Admin':{
                        console.log(SearchArray);
                        temp = orchestratedUsers.Admin
                        for(let i = 0 ; i < temp.length ;i++){
                           if(temp[i].property == value){
                               SearchArray.push(temp);
                            }
                        }
            }case 'User':{
                        temp = orchestratedUsers.User
                        for(let i = 0 ; i < temp.length ;i++){
                           if(temp[i].property == value){
                              SearchArray.push(temp);
                            }
                        }
            }case 'Moderator':{
                           temp = orchestratedUsers.User
                           for(let i = 0 ; i < temp.length ;i++){
                               if(temp[i].property == value){
                                SearchArray.push(temp);
                                }
                            }
            }
        } 
    } 
    
    return SearchArray;
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
searchUsers(array,["Admin","User"],"companyId","A3100")
