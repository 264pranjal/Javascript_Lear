const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
var accountSet; // undefined
let accountState; //undefined
// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scsope
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountSet, accountState, accountBank])
//let accountBank="hdfc"; //error cannot use befor initialization
var accountBank="hdfc"; //undefined because it is hoisted but not initialized.