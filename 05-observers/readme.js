import State from './State'
// When we create an Observable giving an initial value as parameter 
const [pointGetter, pointSetter] = State({x:0, y:0, z:0})
// We receive getter and setter that will autocomplete their parameter 
// with the same type given as initial value
pointGetter(p => console.log(`x=${p.x}, y=${p.y} z=${p.z}`))
pointSetter({x:-12, y: 90, z: 5})
