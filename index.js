document.addEventListener("DOMContentLoaded", function () {
  var sizeColorSection = document.querySelector(".size-color-section");
  var sizeColorSection2nd = document.querySelector(".size-color-section2nd");
  var sizeColorSection3rd = document.querySelector(".size-color-section3rd")
  var unitCheckbox = document.getElementById("unitCheckbox");
  var unitCheckbox2nd = document.getElementById("unitCheckbox2nd");
  var unitCheckbox3rd = document.getElementById("unitCheckbox3rd")
  var mainContainer = document.querySelector(".box-container");
  var mainContainer2nd = document.querySelector(".box-container2nd");
  var mainContainer3rd = document.querySelector(".box-container3rd")

  mainContainer.style.border = "1px solid #ccc";
  sizeColorSection.style.display = "none";
  mainContainer2nd.style.border = "1px solid #ccc";
  sizeColorSection2nd.style.display = "none";
  mainContainer3rd.style.border = "1px solid #ccc";
  sizeColorSection3rd.style.display = "none";

  unitCheckbox.addEventListener("change", function () {
    unitCheckbox3rd.checked = false; 
    sizeColorSection3rd.style.display = "none";
    unitCheckbox2nd.checked = false; 
    sizeColorSection2nd.style.display = "none";
    mainContainer2nd.style.border = "1px solid #ccc";
    sizeColorSection.style.display = this.checked ? "flex" : "none";
    var borderColor = this.checked ? "#FF6B82" : "#ccc";
    mainContainer.style.border = `3px solid ${borderColor}`;
  });


  unitCheckbox2nd.addEventListener("change", function () {
    unitCheckbox3rd.checked = false; 
    sizeColorSection3rd.style.display = "none";
    unitCheckbox.checked = false; 
    sizeColorSection.style.display = "none";
    mainContainer.style.border = "1px solid #ccc";
    sizeColorSection2nd.style.display = this.checked ? "flex" : "none";
    var borderColor = this.checked ? "#FF6B82" : "#ccc";
    mainContainer2nd.style.border = `3px solid ${borderColor}`;
  });


  unitCheckbox3rd.addEventListener("change", function () {
    unitCheckbox2nd.checked = false; 
    sizeColorSection2nd.style.display = "none";
    unitCheckbox.checked = false; 
    sizeColorSection.style.display = "none";
    mainContainer.style.border = "1px solid #ccc";
    sizeColorSection3rd.style.display = this.checked ? "flex" : "none";
    var borderColor = this.checked ? "#FF6B82" : "#ccc";
    mainContainer3rd.style.border = `3px solid ${borderColor}`;
  });
});
