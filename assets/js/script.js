var today = moment();

$("#date").text(today.format("MMM Do, YYYY"));

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();

  timeSlots();

}

$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".form-control").val()
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, value)
    console.log(value, key)
})
$("#9 .form-control").val(localStorage.getItem("9"))
$("#10 .form-control").val(localStorage.getItem("10"))
$("#11 .form-control").val(localStorage.getItem("11"))
$("#12 .form-control").val(localStorage.getItem("12"))
$("#13 .form-control").val(localStorage.getItem("13"))
$("#14 .form-control").val(localStorage.getItem("14"))
$("#15 .form-control").val(localStorage.getItem("15"))
$("#16 .form-control").val(localStorage.getItem("16"))
$("#17 .form-control").val(localStorage.getItem("17"))
// do for all time slots

function timeSlots() {
    var time = parseInt(moment().format("k"))
    $(".col-12").each(function(){
        var timeSlot = parseInt($(this).attr("id"))
        if(time > timeSlot) {
            $(this).addClass("future")
        }else if(time == timeSlot) {
            $(this).addClass("present")
        }else {
            $(this).addClass("past")
        }
    })
}
// taget id again, similar to line 13/14 and access current time

    // if statement, compare current time to time slot
    // target id > current hour (past)
        // remove present add past
    // target id = current hour (present)
        // remove future add present
    // target id < current hour (future)
        // add future