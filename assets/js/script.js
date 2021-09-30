var today = moment();

$("#date").text(today.format("MMM Do, YYYY"));

setInterval(myTimer);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".form-control").val()
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, value)
    console.log(value, key)
})
$("#9 .form-control").val(localStorage.getItem("9"))