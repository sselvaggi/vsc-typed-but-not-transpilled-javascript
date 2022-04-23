// We can define parameter's type in order to have autocomplete
function isPalindrome(/** @type {string} */ text) {
  return text === text.split('').reverse().join('') 
}

for (let w of ['eye', 'duck']) {
  console.log(`Is "${w}" palindrome? ${isPalindrome(w) ? 'Yes':'No'}`)
}
