let USERS_DB = []

function goToHomePage () {
	document.getElementById('home').style.display = 'block'
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'none'

	document.getElementById('home-link').classList.add('active')
	document.getElementById('login-link').classList.remove('active')
	document.getElementById('signup-link').classList.remove('active')
}

function goToSignUpPage() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'block'

	document.getElementById('signup-link').classList.add('active')
	document.getElementById('home-link').classList.remove('active')
	document.getElementById('login-link').classList.remove('active')
}

function goToLoginPage() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('login-form').style.display = 'block'
	document.getElementById('signup-form').style.display = 'none'

	document.getElementById('login-link').classList.add('active')
	document.getElementById('signup-link').classList.remove('active')
	document.getElementById('home-link').classList.remove('active')
}

function signup() {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let phoneNumber = document.getElementById('phone-number').value
	let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value

	let error = false

	if(password !== confirmPassword) {
		document.getElementById('confirm-password-invalid').style.display = 'block'
		error = true
	} else {
		document.getElementById('confirm-password-invalid').style.display = 'none'
	}

	if(!error) {
		let userDetails = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password: encryptPassword(password),
    }
		USERS_DB.push(userDetails)
		alert('Your details have been saved successfully!')
		document.getElementById('signup-form-id').reset()
		console.log(USERS_DB)
	}
}

function login () {
	let loginEmail = document.getElementById('login-email').value
	let loginPassword = document.getElementById('login-password').value

	if(USERS_DB.find(user => user.email === loginEmail && decryptPassword(user.password) === loginPassword)) {
		alert('Access granted')
	} else {
		alert('Access denied')
	}
}

let encryptionRule = {
	'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
	'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
	'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
	'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
	'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
	'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
	'Y': 'L', 'Z': 'M',
	'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
	'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
	'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
	'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
	'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
	'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
	'y': 'l', 'z': 'm',
	'0': '5', '1': '6', '2': '7', '3': '8',
	'4': '9', '5': '0', '6': '1', '7': '2',
	'8': '3', '9': '4',
	'!': '#', '$': '%', '&': '+', '-': '@',
	'_': '~', '#': '!', '%': '$', '+': '&',
	'@': '-', '~': '_'
}

function encryptPassword(inputString){
	let encyptedString = ''
	for(let char of inputString){
		encyptedString = encyptedString + encryptionRule[char]
	}
	return encyptedString
}

function decryptPassword(encyptedString){
	let originalString = ''
	let keys = Object.keys(encryptionRule)
	let values = Object.values(encryptionRule)
	for(let char of encyptedString){
		let requiredIndex = values.indexOf(char)
		originalString = originalString + keys[requiredIndex]
	}
	return originalString
}























/* ----------------------------------------- */

// 1. Whether any user exists in USERS_DB with the entered email (loginEmail)
// 2. If user exists, then whether the password for that user matches with the entered password

/* 
	Project Task for Hiatus (14 Sept - 16th Sept): Submission on 17th Sept
	- Create any popular website (with different sections) using existing HTML, CSS, Bootstrap and JS logic (Shopping site, Online delivery, Library management, etc.)
	- [Mandatory] Attach authentication logic (Sign up +  Login) to that website
	- [Mandatory] Any forms used should be validated
*/

// shivam@gmail.com	shivam123 tijwbn234 (Encryption logic: Next character) (Decryption logic: Previous character)

// function encrypt(inputString){
// 	let encyptedString = ''
// 	let encryptionRule = {
// 		'A': 'N',
// 		'B': 'O',
// 		'C': 'P',
// 		'D': 'Q',
// 		'1': '9',
// 		'2': '8'
// 	}
// 	for(let char of inputString){
// 		encyptedString = encyptedString + encryptionRule[char]
// 	}
// 	return encyptedString
// }

// console.log(encrypt('DC21AB'))
