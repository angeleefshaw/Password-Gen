const symbols= ['!','@','#','&','%','^','&','*','+','?']
// const numbers = [1,2,3,4,5,6,7,8,9]
// const upperCase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
const finalArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var password = generatePassword();

const isChecked = (variableName, firstArr, secondArr) => {
  if (variableName.checked === true) {
    for (let i=0; i<firstArr.length; i++) {
      secondArr.push(firstArr[i]);
    }
  } else {
    secondArr.push('');
  }
  return console.log(secondArr)
}

isChecked(speicalCharacter, symbols, finalArr)

const specialCharacter = document.querySelector("#specialCharacter");
const generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Generate password function that takes final array and shuffles it
const generatePassword =(finalArray.map( finalArr => {
  Math.floor(math.random() * finalArr.length))
}

// pushes the generated password to the text area 
generateBtn.addEventListener('click', ()=> {
  passwordText.innerhtml= generatePassword.join('');
})


// var characterAmountinput = document.querySelector("#characterAmount");



// passwordText.value = password;




// var lowerCase = ['abcdefghijklmnopqrstuvwx,'y','z']





// var numOfCharacters = characterAmountinput.value
// specialCharacters= specialCharacterinput.value

