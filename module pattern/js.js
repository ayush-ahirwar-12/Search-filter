function createProduct(name, price) {
  let stock = 10;
  return {
    name,
    price,
    checkStock() {
      console.log(stock);
    },
    buy(qty) {
      if (qty <= stock) {
        stock -= qty;
        console.log(`${qty} has been sold , ${stock} is available`);
      } else {
        console.log(`${qty} not available in the stock`);
      }
    },
    refill(qty){
        stock +=qty;
        console.log(`available stock ${stock}`);
        
    }
  };
}

let iphone = createProduct("iphone",50000)
    
