function compression(encryption){
    let dictionary = {};
    let temp = "";

    
    for(let i = 0 ; i < encryption.length;i++){

          //Check if the character exists in the dictionary and if it does just add 1 on it's value.
          if(encryption.charAt(i) in dictionary){
               dictionary[encryption.charAt(i)]+=1; 
          }else{
              //if the current character does not exists in the dictionary and it's not the first character in the encryption code then that means we done with first portion of the code so add it to temp and delete it in the dictionary.  
              if(i != 0){
                temp += encryption.charAt(i-1)+ dictionary[encryption.charAt(i-1)];
                delete dictionary[encryption.charAt(i-1)];
              }
              //add current character into dictionary. 
              dictionary[encryption.charAt(i)]=1;        
          }
     }

    //The algorithm applied above will only leave one Key in dictionary and here we will just add that last key. 
    for(i in dictionary){
        temp+= i+dictionary[i];
    }     
    console.log(temp);
}


function Decompression(decryption){
    let count = 0;
    let temp  = "";
    let check = ""

    for(let i = 0 ; i < decryption.length ; i++){
       
        //if character is a number and is the last elemement in decryption code then add it to check then iterate that number of times printing the character 
       if(!isNaN(decryption.charAt(i)) && i === decryption.length - 1){

          check = check+""+decryption.charAt(i); //a23b445b45 , check = 2+""3 for charater (do this iteratively) 
          let y = parseInt(check);

          for (let x = 0 ; x < y ; x++){
              temp+=decryption.charAt(i-check.length); //  e.g a234 , read 234 the go back 3 character back to print a 234 times.
          }
          check = "" // you done printing a, then clear check;
       }
       else if(!isNaN(decryption.charAt(i))){
            check = check+""+decryption.charAt(i);
    
       }

       else{
           // this is doing the same this as the first if statement but the number is not last element in the decryption code in this case.
           let y = parseInt(check);
           for (let x = 0 ; x < y ; x++){
            temp+=decryption.charAt(i-check.length);
           }
           check = ""     
       }    
  }
  console.log(temp);  
}


compression("xxyzzzx");
Decompression("a20");
