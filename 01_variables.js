const accountId = 12345;
let accountEmail = "swatithakre@gmail.com";
var accountPassword= "swati123";
let accountCity = " Indore";
let accountState ;

//accountId= 2;
accountEmail= "swati@gmail.com" ;
accountPassword= "12356";
accountCity= "Bengaluru";

/*
prefer not to use var bcoz of block scope or functional scope 
*/

console.log(accountId);
console.table([ accountId,accountEmail, accountPassword, accountCity, accountState]);