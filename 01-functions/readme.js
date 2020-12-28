/**
 * @param {string} text 
 * @returns {boolean}
 */
function isPalindrome(text) {
  return text === text.split('').reverse().join('') 
}

const words = ['eye', 'duck']
for (const w of words) {
  console.log(`Is "${w}" palindrome? ${isPalindrome(w) ? 'Yes':'No'}`)
}
