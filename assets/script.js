
const passwordDisplay = document.getElementById('password');
const includeSymbolsElement = document.getElementById("specialCharacter");
const generateBtn = document.getElementById("generate");
const characterAmountNumber= document.getElementById('characterAmount')


generateBtn.addEventListener('click', e => {
  e.preventDefault()
  const characterAmount = Number(characterAmountNumber.value)
  const includeSymbols = includeSymbolsElement.checked
  console.log(characterAmount,includeSymbols)
  const password = generatePassword(characterAmount, includeSymbols);
  passwordDisplay.innerText = password;
})



const generatePassword = (characterAmount, includeSymbols) => {
const symbols= ['!','@','#','&','%','^','&','*','+','?']
const numbers = [1,2,3,4,5,6,7,8,9]
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const finalArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let pass = "";
// if(includeNums) finalArr.push(...numbers);
// if(includeUpper) finalArr.push(...upperCase);
if(includeSymbols) finalArr.push(...symbols) 
for (let i = 0; i<characterAmount; i++) {
  let character = finalArr[Math.floor(Math.random() *  finalArr.length)]
  //generatePassword.push(character);
  pass += character;
}
return pass
}












