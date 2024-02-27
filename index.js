document.getElementById("unitCheckbox").addEventListener("change", function () {
  var sizeColorSection = document.querySelector(".size-color-section");
  sizeColorSection.style.display = this.checked ? "flex" : "none";

  var mainContainer = document.querySelector(".box-container");
  var borderColor = this.checked ? "pink" : mainContainer.style.border = "1px solid #ccc"; 
  mainContainer.style.border = `3px solid ${borderColor}`;
});
