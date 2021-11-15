function paedCalculation() {
  // Declare variables for entered inputs
  var age = Number($("#ageEntered").val());
  var wtEntered = Number($("#weightEntered").val());

  // Declare calculated variables
  var wtCalc = (age + 4) * 2;
  if (wtEntered === 0) {
    var weight = wtCalc;
  } else {
    weight = wtEntered;
  }
  var sbp = 80 + age * 2;
  var shock = weight * 4;
  var atropine = weight * 20;
  var adrenaline = weight * 10;
  var amiodarone = weight * 5;
  var fent = weight * 2;
  var prop = weight * 4;
  var sux = weight * 2;
  var ondans = (weight * 0.15).toFixed(1);
  var dexa = (weight * 0.15).toFixed(1);
  var paracetamol = weight * 15;
  var ibuprofen = weight * 10;
  var ketorolac = weight * 2;

  var ett = (age / 4) + 4;
  var depth = age / 2 + 12;

  // LMA sizing algorithm
  if (weight < 5) {
    var lma = 1;
  } else if (weight >= 5 && weight < 10) {
    lma = 1.5;
  } else if (weight >= 10 && weight < 20) {
    lma = 2;
  } else if (weight >= 20 && weight < 30) {
    lma = 2.5;
  } else if (weight >= 30) {
    lma = 3;
  }

  var paedAnaesCategories = "Weight (kg):\nsBP (mmHg):\n\nShock (J):\nAmiodarone (mg):\nAdrenaline (mcg):\nAtropine (mcg):\n\nETT size:\nETT depth (cm):\nLMA size:\n\nFentanyl (mcg):\nPropofol (mg):\nSuxamethonium (mg):\n\nOndansetron (mg):\nDexamethasone (mg):\nParacetamol (mg):\nIbuprofen (mg):\nKetorolac (mg):";
  var paedAnaesOutput = weight + "\n" + sbp + "\n\n" + shock + "\n" + amiodarone + "\n" + adrenaline + "\n" + atropine + "\n\n" + ett + "\n" + depth + "\n" + lma + "\n\n" + fent + "\n" + prop + "\n" + sux + "\n\n" + ondans + "\n" + dexa + "\n" + paracetamol + "\n" + ibuprofen + "\n" + ketorolac;
  document.querySelector("#paedCalculatorOutputCategories").innerText = paedAnaesCategories;
  document.querySelector("#paedCalculatorOutput").innerText = paedAnaesOutput;
}



function incomeDistribution() {
  var income = Number($("#income").val());
  // var income = Number(document.querySelector("#income").value);
  var mojo = 0;
  var parents = 0;
  var shares = 0;

  if ($("#mojo").is(":checked")) {
    if (income > 100) {
      income -= 100;
      mojo = 100;
    } else {
      alert("Insufficient funds - Mojo");
    }
  }

  if ($("#parents").is(":checked")) {
    if (income > 800) {
      income -= 800;
      parents = 400;
    } else {
      alert("Insufficient funds - Parents");
    }
  }

  if ($("#shares").is(":checked")) {
    if (income > 1000) {
      income -= 1000;
      shares = 1000;
    } else {
      alert("Insufficient funds - Shares");
    }
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
