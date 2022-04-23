/**
 * @template T
 * @returns {[
 *  (fn:(value:T) => {}) => {}, 
 *  (value:T)=>{}]
 * }
 */
export default (/** @type {T} */ value) => {
    let _value = value
    let _fns = []
    return [
        function getter(fn) {
            if ('function' === typeof fn) {
                _fns.push(fn)
                fn(_value)
            }
            return _value
        },
        function setter(value) {
            for(let f of _fns) f(value, _value)
            _value = value
        }
    ]
}