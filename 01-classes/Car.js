module.exports = class Car { 
   constructor(brand) { 
      this.brand = brand 
   }

   /**
    * @return {number}
    */
   getRandonValue() {
      return Math.random()
   }
 }