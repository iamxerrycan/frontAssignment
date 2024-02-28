document.addEventListener("DOMContentLoaded", function () {
  var sizeColorSection = document.querySelector(".size-color-section");
  var sizeColorSection2nd = document.querySelector(".size-color-section2nd");
  var unitCheckbox = document.getElementById("unitCheckbox");
  var unitCheckbox2nd = document.getElementById("unitCheckbox2nd");
  var mainContainer = document.querySelector(".box-container");
  var mainContainer2nd = document.querySelector(".box-container2nd");

  mainContainer.style.border = "1px solid #ccc";
  sizeColorSection.style.display = "none";
  mainContainer2nd.style.border = "1px solid #ccc";
  sizeColorSection2nd.style.display = "none";

  unitCheckbox.addEventListener("change", function () {
    unitCheckbox2nd.checked = false; // Uncheck the second checkbox
    sizeColorSection2nd.style.display = "none";
    mainContainer2nd.style.border = "1px solid #ccc";
    sizeColorSection.style.display = this.checked ? "flex" : "none";
    var borderColor = this.checked ? "#FF6B82" : "#ccc";
    mainContainer.style.border = `3px solid ${borderColor}`;
  });

  unitCheckbox2nd.addEventListener("change", function () {
    unitCheckbox.checked = false; // Uncheck the first checkbox
    sizeColorSection.style.display = "none";
    mainContainer.style.border = "1px solid #ccc";
    sizeColorSection2nd.style.display = this.checked ? "flex" : "none";
    var borderColor = this.checked ? "#FF6B82" : "#ccc";
    mainContainer2nd.style.border = `3px solid ${borderColor}`;
  });
});
