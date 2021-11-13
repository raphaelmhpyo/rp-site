function incomeDistribution(){
  var income = document.querySelector("input#income").value;
  var mojo = 0;
  var parents = 0;
  var shares = 0;

  if (document.querySelector("#mojo").checked === true){
    if (income > 100){
      income-=100;
      mojo = 100;
    } else {
      alert("Insufficient funds!");
    }
  }

  if (document.querySelector("#parents").checked === true){
    if (income > 800){
      income-=800;
      parents = 400;
    } else {
      alert("Insufficient funds!");
    }
  }

  if (document.querySelector("#shares").checked === true){
    if (income > 1000){
      income-=1000;
      shares = 1000;
    }
  } else {
    alert("Insufficient funds!");
  }

  var fe = income * 0.65;
  var de = income * 0.2;
  var sm = income * 0.1;
  var spl = income * 0.025;

  var output = "\nMojo: $" + mojo.toFixed(2) + "\nParents' Gift: $" + parents.toFixed(2) + "\nShares: $" + shares.toFixed(2) + "\nFire Extinguisher: $" + fe.toFixed(2) + "\nDaily Expenses: $" + de.toFixed(2) + "\nSmile: $" + sm.toFixed(2) + "\nSplurge: $" + spl.toFixed(2);

  document.querySelector("#calculatorOutput").innerText = output;
}
