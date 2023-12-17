class Discount {
    constructor(type, threshold, discountedPrice, requiredProduct, freeProduct) {
      this.type = type; // Type of discount e.g., 'bulk', 'bundle', 'xfory'
      this.threshold = threshold; // The threshold to qualify for the discount
      this.discountedPrice = discountedPrice; // The price after discount is applied, if applicable
      this.requiredProduct = requiredProduct; // The product required to be bought for the discount
      this.freeProduct = freeProduct; // The product that is free, if applicable
    }
  }
  
  module.exports = Discount;
  