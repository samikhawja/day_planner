var today = moment();

$("#date").text(today.format("MMM Do, YYYY"));
// $(".time").text(today.format("LTS"));
setInterval(myTimer);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
// window.setInterval(function () {
//     $(".time").html(today.format("LTS"));
// }, 1000);

