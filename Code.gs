function updateForm() {
  // This function is an adapted version of the function built and explained by
  // Melinda Waffle at the following URL. Follow the guide to installation.
  // http://wafflebytes.blogspot.com/2016/10/google-script-create-drop-down-list.html
  
  // It creates a drop-down list from a spreadsheet column.
  // Once configured it is very easy to modify the entries of a drop-down menu
  // in a google form.
  
  // This function was designed for eBallots in mind for use by the
  // Alberta Debate and Speech Association.
  // A paper version of the ballot that is being modelled can be found at the 
  // following URL.
  // 
  
  // call your form and connect to the drop-down item
  
  // Edit line 20 by replacing the string with the Form ID that correponds to 
  // your Google Form URL.
  var form = FormApp.openById("Fill in Form ID");
  
  // Each drop-down list corresponds to a question in your Google Form.
  // Each question in the Google Form will have a data-item-ID that can be 
  // found by inspecting the element in the Google form.
  // Edit lines X by replacing the string with the
  // found data-item-id

  var judgeList = form.getItemById("Fill in the Drop-Down List ID for judges").asListItem();
  var roomList = form.getItemById("Fill in the Drop-Down List ID for rooms").asListItem();
  
  var speaker1List = form.getItemById("Fill in the Drop-Down List ID for Speaker 1").asListItem();
  var speaker2List = form.getItemById("Fill in the Drop-Down List ID for Speaker 2").asListItem();
  var speaker3List = form.getItemById("Fill in the Drop-Down List ID for Speaker 3").asListItem();
  var speaker4List = form.getItemById("Fill in the Drop-Down List ID for Speaker 4").asListItem();
  var speaker5List = form.getItemById("Fill in the Drop-Down List ID for Speaker 5").asListItem();
  
  // Changes do not need to be made beyond this point.
  
  // identify the sheet where the data resides needed to populate the drop-down
  var ss = SpreadsheetApp.getActive();
  var names = ss.getSheetByName("Names List")
  
  var judgeNamesValues = names.getRange(2, 1, names.getMaxRows() - 1).getValues();
  var roomNamesValues = names.getRange(2, 7, names.getMaxRows() - 1).getValues();
  var speakerNamesValues = names.getRange(2, 3, names.getMaxRows() - 1).getValues();

  var judgeNames = [];
  var speakerNames = [];
  var roomNames = [];
  
  // convert the array ignoring empty cells
  for(var i = 0; i < judgeNamesValues.length; i++)   
    if(judgeNamesValues[i][0] != "")
      judgeNames[i] = judgeNamesValues[i][0];
  
  // convert the array ignoring empty cells
  for(var i = 0; i < roomNamesValues.length; i++)   
    if(roomNamesValues[i][0] != "")
      roomNames[i] = roomNamesValues[i][0];
  
  // convert the array ignoring empty cells
  for(var i = 0; i < speakerNamesValues.length; i++)   
    if(speakerNamesValues[i][0] != "")
      speakerNames[i] = speakerNamesValues[i][0];
  
  // populate the drop-down with the array data
  judgeList.setChoiceValues(judgeNames);
  roomList.setChoiceValues(roomNames);

  speaker1List.setChoiceValues(speakerNames);
  speaker2List.setChoiceValues(speakerNames);
  speaker3List.setChoiceValues(speakerNames);
  speaker4List.setChoiceValues(speakerNames);
  speaker5List.setChoiceValues(speakerNames);

)