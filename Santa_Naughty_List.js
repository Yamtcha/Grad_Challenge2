let santasList = ["Tom","Errol","Sam","Peter","Jennifer"];
let children = ["Errol", "Peter", "Jennifer"];

function findChildren(santasList,children) {
    // filtering Santa list to see which children to not appear there. (case sensitive)
    var uniqueArray = children.filter(function(elem) {
        return santasList.includes(elem);
    }
    );
//Sort the array into alphabetical order.
uniqueArray.sort();
console.log(uniqueArray); 
}
findChildren(santasList,children);

  
