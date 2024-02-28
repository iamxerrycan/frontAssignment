document.addEventListener("DOMContentLoaded", function () {
  var sizeColorSection = document.querySelector(".size-color-section");
  var sizeColorSection2nd = document.querySelector(".size-color-section2nd");
  var sizeColorSection3rd = document.querySelector(".size-color-section3rd");
  var unitCheckbox = document.getElementById("unitCheckbox");
  var unitCheckbox2nd = document.getElementById("unitCheckbox2nd");
  var unitCheckbox3rd = document.getElementById("unitCheckbox3rd");
  var mainContainer = document.querySelector(".box-container");
  var mainContainer2nd = document.querySelector(".box-container2nd");
  var mainContainer3rd = document.querySelector(".box-container3rd");

  mainContainer.style.border = "1px solid #ccc";
  sizeColorSection.style.display = "none";
  mainContainer2nd.style.border = "1px solid #ccc";
  sizeColorSection2nd.style.display = "none";
  mainContainer3rd.style.border = "1px solid #ccc";
  sizeColorSection3rd.style.display = "none";

  // click event for 1stbox
  mainContainer.addEventListener("click", function () {
    unitCheckbox.checked = !unitCheckbox.checked; // Toggling
    unitCheckbox2nd.checked = false;
    unitCheckbox3rd.checked = false;
    sizeColorSection2nd.style.display = "none";
    sizeColorSection3rd.style.display = "none";

    sizeColorSection.style.display = unitCheckbox.checked ? "flex" : "none";
    var borderColor = unitCheckbox.checked ? "#FF6B82" : "#ccc";
    mainContainer.style.border = `3px solid ${borderColor}`;
  });

  // click event for 2ndbox
  mainContainer2nd.addEventListener("click", function () {
    unitCheckbox2nd.checked = !unitCheckbox2nd.checked; // Toggling
    unitCheckbox.checked = false;
    unitCheckbox3rd.checked = false;
    sizeColorSection.style.display = "none";
    sizeColorSection3rd.style.display = "none";

    sizeColorSection2nd.style.display = unitCheckbox2nd.checked ? "flex" : "none";
    var borderColor = unitCheckbox2nd.checked ? "#FF6B82" : "#ccc";
    mainContainer2nd.style.border = `3px solid ${borderColor}`;
  });

  // click event for 3rdbox
  mainContainer3rd.addEventListener("click", function () {
    unitCheckbox3rd.checked = !unitCheckbox3rd.checked; // Toggling
    unitCheckbox.checked = false;
    unitCheckbox2nd.checked = false;
    sizeColorSection.style.display = "none";
    sizeColorSection2nd.style.display = "none";

    sizeColorSection3rd.style.display = unitCheckbox3rd.checked ? "flex" : "none";
    var borderColor = unitCheckbox3rd.checked ? "#FF6B82" : "#ccc";
    mainContainer3rd.style.border = `3px solid ${borderColor}`;
  });
});
