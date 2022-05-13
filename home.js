var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
passwd = dd + mm + yyyy + "pAssworD";

var pw = prompt("Enter calculation input:");
if (pw === passwd){
} else {
  window.location.href = "index.html";
}
