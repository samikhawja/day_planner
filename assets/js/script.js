var today = moment();

$(".date").text(today.format("MMM Do, YYYY"));
$(".time").text(today.format("LTS"));
// window.setInterval(function () {
//     $(".time").html(today.format("LTS"));
// }, 1000);