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

  var categoriesText = "Mojo:\nParents' Gift:\nShares:\nFire Extinguisher:\nDaily Expenses:\nSmile:\nSplurge:"
  var output = "$" + mojo.toFixed(2) + "\n$" + parents.toFixed(2) + "\n$" + shares.toFixed(2) + "\n$" + fe.toFixed(2) + "\n$" + de.toFixed(2) + "\n$" + sm.toFixed(2) + "\n$" + spl.toFixed(2);
  document.querySelector("#calculatorOutputCategories").innerText = categoriesText;
  document.querySelector("#calculatorOutput").innerText = output;
}
