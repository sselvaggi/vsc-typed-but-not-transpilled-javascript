const {Bucket} = require('./Bucket')
const bucket = /** */ new Bucket()
bucket.setItem("A", { message: "Hello world!" })
bucket.getItem("A") // this returns the same object but we don't have autocomple 

const bucketWithGeneric = /** @type {import('./Bucket').Bucket<{message:String}>} */ (bucket)
bucketWithGeneric.getItem("A").message // <- Now we have autocomplete fot getItem result