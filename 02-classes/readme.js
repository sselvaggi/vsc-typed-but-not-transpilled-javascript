const Car = require('./Car')
const car = new Car('Ford')
car.brand === 'Ford'

const jsondata = JSON.stringify(car)

// After restoring objects them lose the type definition
const carWithoutAutocomple = JSON.parse(jsondata)
carWithoutAutocomple

// We can use JSDoc to tell VSC about the type of variables.
// In this case we are goin to use type definition from Car.js
/**
 * @typedef {import('./Car')} Car
 */
// We have to cast the object to the type definition
const carJSDoc = /** @type {Car} */ ( JSON.parse(jsondata) )
car.brand // <- now we have autocomplete car's of properties

// Javascript doesn't read comments. It's still a plain object
carJSDoc.honk // class methods are not defined

// To use class methods we have to set the prototype with Javascript
Object.setPrototypeOf(carJSDoc, Car.prototype)
carJSDoc.honk() // <- Now can call class methods

console.log(`${carJSDoc.brand}: ${carJSDoc.honk()}`)
