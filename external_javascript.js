
function turnOff(classname) {
  let checkBox = document.getElementById("nodeCheckbox");
  var entityList = d3.selectAll("." + classname);

  if (checkBox.checked == true){
    entityList.classed("hide", true);
  } else {
    entityList.classed("hide", false);
  }
}


