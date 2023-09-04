window.addEventListener("DOMContentLoaded", () => {
  const roundTripRadio = document.getElementById("round-trip");
  roundTripRadio.checked = true;
});
document.getElementById("one-way-trip").addEventListener("change", () => {
  const pickUpElement = document.getElementById("hidden");
  const ChangeTimeWidth = document.getElementById("ChangeTimeWidth");

  ChangeTimeWidth.style.width = "50%";

  pickUpElement.classList.add("d-none");
});

document.getElementById("round-trip").addEventListener("change", () => {
  const pickUpElement = document.getElementById("hidden");
  const ChangeTimeWidth = document.getElementById("ChangeTimeWidth");

  ChangeTimeWidth.style.width = "25%";
  pickUpElement.classList.remove("d-none");
});
const y = document.getElementById("y");
let isWidth25 = true;

document.getElementById("return-back").addEventListener("change", () => {
  const pickUpElement = document.getElementById("pick-up");

  pickUpElement.classList.toggle("d-none");

  if (isWidth25) {
    ChangeDateWidth.style.width = "50%";
    ChangeTimeWidth.style.width = "50%";
  } else {
    ChangeDateWidth.style.width = "25%";
    ChangeTimeWidth.style.width = "25%";
  }

  isWidth25 = !isWidth25;
});

let a;
let b;

//Disapled input
y.addEventListener("change", () => {
  if (y.value >= 3) {
    document.getElementById("a1").disabled = true;
    document.getElementById("a2").disabled = true;
    a = document.getElementById("a1").value;
    b = document.getElementById("a2").value;

    document.getElementById("a1").value = null;
    document.getElementById("a2").value = null;
  } else {
    document.getElementById("a1").disabled = false;
    document.getElementById("a2").disabled = false;
    document.getElementById("a1").value = a;
    document.getElementById("a2").value = b;
  }
});
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
