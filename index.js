//
//
//
// ------------------------------------------------
// Local Anaesthetic Calculation Below
// ------------------------------------------------
//
//
//
function localAnaesCalculation() {

  var height = Number($("#heightEntered").val());
  var totalBodyWeight = Number($("#weightEntered").val());
  var finalBodyWeight = 0;
  var sex = $("#sexCategory").val();
  var BMI = totalBodyWeight / (height * height);
  var localChosen = $("#localChoice").val();
  var concChosen = Number($("#localConcentrationEntered").val());
  var finalVolume = 0;
  var weightCategory = "TBW"

  if (height === 0){
    finalBodyWeight = totalBodyWeight;
  } else {
    if (BMI >= 30) {
      weightCategory = "LBW";
      if (sex === "female") {
        finalBodyWeight = Math.round((9270 * totalBodyWeight) / (8780 + (224 * BMI)));
        console.log("sex = female");
      } else if (sex === "male") {
        finalBodyWeight = Math.round((9370 * totalBodyWeight) / (6680 + (216 * BMI)));
        console.log("sex = female");
      } else {
        console.log("something wrong after BMI if statement");
      }
    } else {
      weightCategory = "TBW";
      finalBodyWeight = totalBodyWeight;
    }
  }

  var ropi = Math.round(3 * finalBodyWeight);
  var bupi = Math.round(2 * finalBodyWeight);
  var levo = Math.round(2.5 * finalBodyWeight);
  var lidoNeat = Math.round(3 * finalBodyWeight);
  var lidoAdr = Math.round(7 * finalBodyWeight);
  var localName = ""

  switch (localChosen) {
    case "ropivacaine":
      finalVolume = ropi / (concChosen * 10);
      localName = "Ropivacaine";
      break;
    case "bupivacaine":
      finalVolume = bupi / (concChosen * 10);
      localName = "Bupivacaine";
      break;
    case "levobupivacaine":
      finalVolume = levo / (concChosen * 10);
      localName = "Levobupivacaine";
      break;
    case "lidocaineNeat":
      finalVolume = lidoNeat / (concChosen * 10);
      localName = "Lidocaine (without adrenaline)";
      break;
    case "lidocaineAdr":
      finalVolume = lidoAdr / (concChosen * 10);
      localName = "Lidocaine (with adrenaline)";
      break;
    default:
      alert("Default action on switch statement");
      console.log(localChosen + concChosen);
      break;
  }

  var dictLA = {
    "Local Anaesthetic": localName,
    "Concentration": concChosen + " %",
    "Weight": finalBodyWeight + " kg (" + weightCategory + ")",
    "Max Volume": finalVolume + " mL"
  };

  // Create a table to display the output
  generateTable(".laCalcOutput", dictLA);

}
//
//
//
// ------------------------------------------------
// Page Reset Below
// ------------------------------------------------
//
//
//
function resetPage() {
  location.reload();
}
//
//
//
// ------------------------------------------------
// Paed Anaesthesia Calculation Below
// ------------------------------------------------
//
//
//
function paedCalculation() {
  // Declare variables for entered inputs
  var age = Number($("#ageEntered").val());
  var wtEntered = Number($("#weightEntered").val());

  // Declare calculated variables
  var wtCalc = (age + 4) * 2;
  if (wtEntered === 0) {
    var weight = wtCalc;
    var wtCategory = "Estimated"
  } else {
    weight = wtEntered;
    wtCategory = "Actual"
  }
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

  var dictPaed = {
    "Age": (age) + " years",
    "Weight": (weight) + " kg (" + wtCategory + ")",
    "......": "......",
    "sBP": (80 + age * 2) + " mmHg",
    "DC Shock": (weight * 4) + " J",
    "Atropine": (weight * 20) + " mcg",
    "Adrenaline": (weight * 10) + " mcg",
    "Amiodarone": (weight * 5) + " mg",
    "......     ": "......        ",
    "ETT - Uncuffed": (age / 4) + 4,
    "ETT Depth - Oral": ((age / 2) + 12) + " cm",
    "LMA": lma,
    "......  ": "......  ",
    "Fentanyl": (weight * 2) + " mcg",
    "Propofol": (weight * 4) + " mg",
    "Suxamethonium IV": (weight * 2) + " mg",
    "...... ": "...... ",
    "Cefazolin": (weight * 50) + " mg",
    "Ondansetron": ((weight * 0.15).toFixed(1)) + " mg",
    "Dexamethasone": ((weight * 0.15).toFixed(1)) + " mg",
    "Paracetamol": (weight * 15) + " mg",
    "Ibuprofen": (weight * 10) + " mg",
    "Ketorolac": (weight * 2) + " mg",
    "......      ": "...... ",
    "Crystalloid (for shock)": (weight * 20) + " mL",
    "pRBC (for 10g/L)": (weight * 4) + " mL"

  };

  // Create a table to display the output
  generateTable(".paedCalcTableDiv",dictPaed);

}

//
//
//
// ------------------------------------------------
// Income Distribution Calculation Below
// ------------------------------------------------
//
//
//
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

  var dictIncomeDistribution = {
    "Mojo": "$ " + mojo.toFixed(2),
    "Parents' Gift": "$ " + parents.toFixed(2),
    "Shares": "$ " + shares.toFixed(2),
    "Fire Extinguisher": "$ " + (income * 0.65).toFixed(2),
    "Daily Expenses": "$ " + (income * 0.2).toFixed(2),
    "Smile": "$ " + (income * 0.1).toFixed(2),
    "Splurge": "$ " + (income * 0.025).toFixed(2)
  };

  // Create a table to display the output
  generateTable(".incomeOutputTableDiv", dictIncomeDistribution);

}
//
//
//
// ------------------------------------------------
// Output Table Generator Below
// ------------------------------------------------
//
//
//
function generateTable(selector, dict){
  // get the reference for the body
  var body = document.querySelector(selector);

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // iterate through the dictPaed object
  for (var key in dict) {
    var value = dict[key];

    // create a row
    var row = document.createElement("tr");
    // create the left column cell
    var leftCell = document.createElement("td");
    // generate text for the left column
    var leftCellText = document.createTextNode(key);
    // append text into the left column cell
    leftCell.appendChild(leftCellText);
    // append the left cell to the row
    row.appendChild(leftCell);
    // do the same for the right column
    var rightCell = document.createElement("td");
    var rightCellText = document.createTextNode(value);
    rightCell.appendChild(rightCellText);
    row.appendChild(rightCell);
    // append the row to the <tbody>
    tblBody.appendChild(row);

  }
  // append the <tbody> into the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
}
