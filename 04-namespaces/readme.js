// Namespaces are useful to import many type definitions at once from
// Namespaces are defined in .d.ts files that could not contain classes
/// <reference path="types.d.ts" />
// It must be placed before any line of code to work
// more info at https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html

// now we can use types inside namespce
const user1 = /** @type {types.User} */ ( JSON.parse('{"name":"myName", "password": "?"}') )
user1.name // <- Now we have autocomplete

const product1 = /** @type {types.Product} */ ( JSON.parse('{ "name":"myProduct", "price": "25" }') )
product1.price // <- Now we have autocomplete
