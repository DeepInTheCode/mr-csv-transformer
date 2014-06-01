function addTextInputs(targets,headerNames){
  $(document).ready(function() {
    var InputsWrapper   = $("#InputsWrapper"); //Input boxes wrapper ID
    
    $(InputsWrapper).html("");
    var headerOptions = "";
    for (j = 0; j < headerNames.length; j++) {
        headerOptions += "  <option>" + headerNames[j].toString() + "</option>\r\n";
    }
    for (i = 0; i < targets.length; i++) {
      var strInputs = '<p><label>Target ' + (i+1).toString() + ':</label><input style="width: 50%" type="text" id="target_' + i.toString() + '" value="' + targets[i] + '" readonly /></p>' 
        + '<p><label>Mapping ' + (i+1).toString() + ':</label><select style="width: 50%" id="mapping_' + i.toString() + '">'
        + headerOptions
        + '</select></p><br />';
      $(InputsWrapper).append(strInputs);
    };
    return false;
  });
}