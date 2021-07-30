
function turnOff(classname, checkboxname) {
  let checkBox = document.getElementById(checkboxname);
  var entityList = d3.selectAll("." + classname);

  if (checkBox.checked == false){
    entityList.classed("hide", true);
  } else {
    entityList.classed("hide", false);
  }
}

function yearToDate(year){
  return parseTime(year + "-01-01");
}


resolutionDict = {
  "0": "Decade",
  "1": "5 Years",
  "2": "Year",
  "3": "6 Months",
  "4": "Quarter"
}

function handleSliderInput(){
  let slider = document.getElementById("zoomRange");
  let span = document.getElementById("resolutionText");
  let resolution=slider.value;
  span.innerText = resolutionDict[resolution];
}