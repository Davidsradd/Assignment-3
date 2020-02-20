//getElementById and getElemntByTags

var myExample = document.getElementById("parent");

console.log(myExample.childNodes.length);

var myExampleTags = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myExampleTags.length);

var linksInMenu = myExample.getElementsByTagName("li");

console.log ("Number of Li items in Menu: "+ linksInMenu.length);

//	appendChild and TextNode and createElement

    var newItem = document.createElement("li");

    var newText = document.createTextNode("New topic, why were the Golden State Worriors so unstoppable");

    myExample.appendChild(newItem);

    newItem.appendChild(newText);

   
   
   
    //second example
   var myExample = document.getElementById("secondParent");

   console.log(myExample.childNodes.length);
   
   var myExampleTags = document.getElementsByTagName("li");
   
   console.log ("Number of li links: "+ myExampleTags.length);
   
   var linksInMenu = myExample.getElementsByTagName("li");
   
   console.log ("Number of Li items in Menu: "+ linksInMenu.length);
   //second example

    var newItem = document.createElement("li");

    var newText = document.createTextNode("Which is your favorite sport?");

    myExample.appendChild(newItem);

    newItem.appendChild(newText);





//function
function display(name)
{
    alert(" Welcome " + name);
}

display("Basketball Enthusiast")

function addNumbers (a, b){
    var additionResult= a +b;
    return additionResult;
}

var addNumbers2= addNumbers(16,8);
alert(addNumbers2);

//switch
var FishQuestion = prompt ("Quick fun question. If you have 8 fish in a tank and 4 drown how many are still alive?");

switch(FishQuestion){
    case "8":
    alert("You're Right! Fish cannot drown!");
    break;

    case "4":
    alert("Not quite, Fish cannot drown!");
    break;

    default:
    alert("Not even close buddy.");
}