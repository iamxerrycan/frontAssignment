document.addEventListener("DOMContentLoaded", function () {
  var sizeColorSection = document.querySelector(".size-color-section");
  var unitCheckbox = document.getElementById("unitCheckbox");
  var mainContainer = document.querySelector(".box-container");

  mainContainer.style.border = "1px solid #ccc";

  sizeColorSection.style.display = "none";

  unitCheckbox.addEventListener("change", function () {
    sizeColorSection.style.display = this.checked ? "flex" : "none";

    var borderColor = this.checked ? "pink" : "#ccc";
    mainContainer.style.border = `3px solid ${borderColor}`;
  });
});
