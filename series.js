console.log("connected");
function Inputbox(){
    var valueofip;
    var valueofop;
    valueofip = document.getElementById("inputtext").value;
    document.getElementById("Input").innerHTML = valueofip;

    // METHOD 1: REVERSE OF STRING
    // var str1 = [];
    // var str = valueofip.split("");
    // for(var i=str.length;i>=0;i--){
    //     str1.push(str[i]);
    //     }
    // var valueofop = str1.join("");

    // METHOD 2: REVERSE OF STRING
    var str1 = valueofip;
    var str2 = "";
    for(var i=str1.length-1;i>=0;i--){
        str2 = str2 + str1.charAt(i);
    }
    valueofop = str2;








    // QUESTION 2: Replace every letter in the string with the letter following it in the alphabet
    // (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and
    // finally return this modified string.

    // var m = valueofip.replace(/[a-z]/gi,function(x){
    // if(x.charAt()=="z" || x.charAt()=="Z"){
    // return "a";
    // }
    // else{
    // return String.fromCharCode(x.charCodeAt()+1)}})
    // var l = m.toLowerCase();
    // var y = l.replace(/a|e|i|o|u/ig,function(x){
    // return x.toUpperCase();
    // })
    // valueofop = y;









    // QUESTION 3: take the str parameter being passed and capitalize the first letter of each word.
    // Words will be separated by only one space

    // var str1 = valueofip.split(" ");
    // var str2 = [];
    // for(var i=0;i<str1.length;i++){
    // console.log(str1[i]);
    // str2.push(str1[i].charAt(0).toUpperCase() + str1[i].substring(1));
    // }
    // valueofop = str2.join(" ");






    // QUESTION 4: take the str parameter being passed and determine if it is an acceptable sequence by either
    // returning the string true or false. The str parameter will be composed of + and = symbols with several
    // letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded
    // by a + symbol. So the string to the left would be false. The string will not be empty and will have at
    // least one letter



// ACTUAL SOLUTION
//     function SimpleSymbols(str) { 

//   // pad the strings so that if a character exists at the beginning
//   // of the string for example, we don't get on out-of-bounds error by
//   // trying to get the character before it
//   var str = '=' + str + '=';

//   // loop through entire string
//   for (var i = 0; i < str.length; i++) {
    
//     // check to see if current character is an alphabetic character  
//     // by using a simple case-insensitive regex pattern 
//     if (str[i].match(/[a-z]/i) !== null) {

//       // check to see if a + symbol is to the left and right
//       // if not, then we know this string is not valid
//       if (str[i-1] !== '+' || str[i+1] !== '+') { 
//         return false;
//       }

//     }
 
//   }

//   return true;
  
// }



    // var str1 = "";
    // valueofip.replace(/[a-z]/ig,function(x){
    // var y = valueofip.indexOf(x);
    // if(valueofip.charAt(y-1)=="+" && valueofip.charAt(y+1)=="+")
    // {str1 = "true";}
    // else 
    // {str1 = "false";}
    // })

    // valueofop = str1;
    document.getElementById("Output").innerHTML = valueofop;



}