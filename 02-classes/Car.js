module.exports = class Car { 
   constructor(brand) { 
      this.brand = brand 
   }

   /**
    * @return {number}
    */
   honk() {
      return 'Beep!'
   }
}
