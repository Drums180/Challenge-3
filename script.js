// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordcontent = [];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var password;
var uppercaseAnswer;
var lowercaseAnswer;
var numericAnswer;
var specialAnswer;
var PasswordLenght;
var randompassword = [];

// Write password to the #password input
function writePassword() {
  randompassword = [] //reset array in order to allow decreases in number of characters
  var password = generatePassword();

  function generatePassword() {
    alert("WARNING: Minimum lenght: 8 - Maximum lenght: 125");
    function Passlenght(){
      PasswordLenght = prompt("How long do you want your password to be?");
      if (PasswordLenght < 8) {
        alert("MINIMUM LENGHT MUST BE 8");
        Passlenght();return;
      } else if (PasswordLenght > 125) {
        alert("MAXIMUM LENGHT MUST BE 125");
        Passlenght();return;
      } else {
        alert("Lenght accepted");
      }
    }
    Passlenght()
    alert("WARNING: Answer only with Y or N");

    function upper(){
      uppercaseAnswer = prompt("Do you want your password to have uppercase letters?")
      if (uppercaseAnswer === "Y" || uppercaseAnswer === "y") {
        passwordcontent.push(uppercase)
        console.log(passwordcontent)
      } else if (uppercaseAnswer === "N" || uppercaseAnswer === "n"){
        console.log(passwordcontent)
      } else {
        alert("Answer with Y or N");
        upper();return;
      }
    }
    upper() 

    function lower(){
      lowercaseAnswer = prompt("Do you want your password to have lowercase letters?")
      if (lowercaseAnswer === "Y" || lowercaseAnswer === "y") {
        passwordcontent.push(lowercase)
        console.log(passwordcontent)
      } else if (lowercaseAnswer === "N" || lowercaseAnswer === "n"){
        console.log(passwordcontent)
      } else {
        alert("Answer with Y or N");
        lower();return;
      }
    }
    lower() 

    function numerical(){
      numericAnswer = prompt("Do you want your password to have numeric characters?")
      if (numericAnswer === "Y" || numericAnswer === "y") {
        passwordcontent.push(numeric)
        console.log(passwordcontent)
      } else if (numericAnswer === "N" || numericAnswer === "n"){
        console.log(passwordcontent)
      } else {
        alert("Answer with Y or N");
        numerical();return;
      }
    }
    numerical() 

    function specialchrct(){
      specialAnswer = prompt("Do you want your password to have special characters?")
      if (specialAnswer === "Y" || specialAnswer === "y") {
        passwordcontent.push(special)
        console.log(passwordcontent)
      } else if (specialAnswer === "N" || specialAnswer === "n"){
        console.log(passwordcontent)
      } else {
        alert("Answer with Y or N");
        numerical();return;
      }
    }
    specialchrct() 

    for (var i = 0; i < PasswordLenght; i++) {
      var choosearray = passwordcontent[Math.floor(Math.random()*passwordcontent.length)]
      console.log(choosearray)
      var randomcontent = choosearray[Math.floor(Math.random()*choosearray.length)]
      console.log(randomcontent)
      randompassword[i]=randomcontent
      console.log(randompassword)
    }
    
    var prepassword = randompassword.join("");

    return prepassword;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
