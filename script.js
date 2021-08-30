// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  const getPasswordOptions = () => {
    const length = parseInt(prompt("How many characters would you like your password to be?"))
  
    if (Number.isNaN(length)) {
      alert("Must be a number")
      return null
    }
  
    if (length < 8) {
      alert("Password must be at least 8 characters.")
      return null
    }
  
    if (length > 128) {
      alert("Password cannot exceed 128 characters.")
      return null
    }
  
    const hasSpecialCharacters = confirm("Click Okay to confirm special characters.")
  
    const hasNumericCharacters = confirm("Click Okay to confirm numeric characters.")
  
    const hasLowercaseCharacters = confirm("Click Okay to confirm lowercase characters.")
  
    const hasUppercaseCharacters = confirm("Click Okay to confirm uppercase characters.")
  
    // conditional statement to check if user does not include any options
    if (hasSpecialCharacters === false && !hasUppercaseCharacters && !hasLowercaseCharacters && !hasNumericCharacters) {
      alert("Must select at least one option")
      return null
    }
  
    const passwordOptions = {
      length: length,
      hasNumericCharacters: hasNumericCharacters,
      hasSpecialCharacters: hasSpecialCharacters,
      hasUppercaseCharacters: hasUppercaseCharacters,
      hasLowercaseCharacters: hasLowercaseCharacters,
    }
    return passwordOptions
  };
  
  const getRandom = (arr) => {
    var randIndex = Math.floor(Math.random() * arr.length)
  
    var randElement = arr[randIndex]
    return randElement
  
  };
  
  
  const generatePassword = () => {
    const options =getPasswordOptions()
  
    var result = []
  
    var possibleCharacters = []
  
    var guranteedCharacters = []
  
    if (!options) return null
  
    // Conditional statement that adds array of special characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
  
      if (options.hasSpecialCharacters){
        possibleCharacters= possibleCharacters.concat(specialCharacters)
        guranteedCharacters.push(getRandom(specialCharacters))
      }
  
      if (options.hasNumericCharacters){
        possibleCharacters= possibleCharacters.concat(numericCharacters)
        guranteedCharacters.push(getRandom(numericCharacters))
      }
  
      if (options.hasUppercaseCharacters){
        possibleCharacters= possibleCharacters.concat(upperCasedCharacters)
        guranteedCharacters.push(getRandom(upperCasedCharacters))
      }
  
      if (options.hasLowercaseCharacters){
        possibleCharacters= possibleCharacters.concat(lowerCasedCharacters)
        guranteedCharacters.push(getRandom(lowerCasedCharacters))
      }
  
      for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters)
  
        result.push(possibleCharacter)
      }
  
      for (var i =0; i < guranteedCharacters.length; i++) {
        result[i] = guranteedCharacters[i]
      }
  
      return result.join("")
  
  };
  
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  