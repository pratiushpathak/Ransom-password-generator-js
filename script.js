const passwordbox=document.getElementById("password");
const length=12;
const upperCase="ABCDEFGHIJKMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()_=[]></+";
const allChars=upperCase+lowercase+number+symbol;
//console.log(allChars);
function createpassword(){
  let password="";
 // Math.floor(Math.random() * 10); // Random integer from 0 to 9
  password+=upperCase[Math.floor(Math.random()*upperCase.length)]//The range becomes: 0 <= x < 26
  password+=lowercase[Math.floor(Math.random()*lowercase.length)]
  password+=number[Math.floor(Math.random()*number.length)]
  password+=symbol[Math.floor(Math.random()*symbol.length)]
  while(length>password.length)
{
  password+=allChars[Math.floor(Math.random()*allChars.length)]

}
passwordbox.value=password;

}
function copypassword(){
  passwordbox.select();//This selects the text inside an input field (like a password or text box).
  document.execCommand("copy")
//document.execCommand("copy");
// This tells the browser to copy the currently selected text to the clipboard.

// It only works after some text has been selected, like you just did with .select().
}
