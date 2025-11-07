let bank = (function () {
  let bankbalance = 12000;
  function checkbalance() {
    console.log(bankbalance);
  }
  function setBalance(newbalance) {
    bankbalance = newbalance;
    console.log(bankbalance);
  }
  function withdraw(val){
    bankbalance-=val;
    console.log(`${val} has been deducted from your acc.available balance ${bankbalance}`);
    
  }
  return {
    checkbalance,
    setBalance,
    wd:withdraw
  }
})();

bank.setBalance(15000)

bank.wd(5000)