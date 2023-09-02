const y = document.getElementById("y");

document.getElementById("seats").addEventListener("change", () => {
  document.getElementById("x").classList.toggle("d-none");
});

document.getElementById("return-back").addEventListener("change", () => {
  document.getElementById("pick-up").classList.toggle("d-none");
});

let a;
let b;

// Hidden inputs
y.addEventListener("change", () => {
  if (y.value >= 3) {
    document.getElementById("a1").classList.add("d-none");
    document.getElementById("a2").classList.add("d-none");
    a = document.getElementById("a1").value;
    b = document.getElementById("a2").value;

    document.getElementById("a1").value = null;
    document.getElementById("a2").value = null;
  } else {
    document.getElementById("a1").classList.remove("d-none");
    document.getElementById("a2").classList.remove("d-none");
    document.getElementById("a1").value = a;
    document.getElementById("a2").value = b;
  }
});

// Disapled input
// y.addEventListener('change', () => {
//   if (y.value >= 3) {
//     document.getElementById('a1').disabled = true;
//     document.getElementById('a2').disabled = true;
//     a = document.getElementById('a1').value;
//     b = document.getElementById('a2').value;

//     document.getElementById('a1').value = null;
//     document.getElementById('a2').value = null;
//   } else {
//     document.getElementById('a1').disabled = false;
//     document.getElementById('a2').disabled = false;
//     document.getElementById('a1').value = a;
//     document.getElementById('a2').value = b;
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  var inputElement = document.getElementById("address1");
  var calendarIcon = document.getElementById("calendar-icon");

  calendarIcon.addEventListener("click", function () {
    inputElement.focus();
    inputElement.click();
  });

  $("#address1").datepicker();
  $("#address2").datetimepicker({
    dateFormat: "dd-mm-yy",
    timeFormat: "HH:mm:ss",
  });
});
