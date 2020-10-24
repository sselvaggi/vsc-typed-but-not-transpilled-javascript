const Car = require('./Car')
const car = new Car('Ford')
car.brand === 'Ford'

const jsondata = JSON.stringify(car)

/**
 * We can use JSDoc to tell VSC about the tipe of variables 
 * @typedef {import('./Car')} Car
 */
const carRestored = /** @type {Car} */ ( JSON.parse(jsondata) )
car.brand // <- now we have autocomplete of properties

carRestored.getRandonValue // but class methods are undefine

// To use methods we have to set the prototype by Javascript
Object.setPrototypeOf(carRestored, Car.prototype)
carRestored.getRandonValue()
