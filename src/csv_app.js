function pullCSVFromWeb() {
  var csvUrl = "YOUR_URL_HERE"; 
  var sheetName = "Weather"; 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);

  // If the 'Weather' sheet doesn't exist, this agent will create it for you
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  
  try {
    var response = UrlFetchApp.fetch(csvUrl);
    var csvData = Utilities.parseCsv(response.getContentText());
    
    sheet.clear(); 
    sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);
    
    // Formatting for readability
    sheet.getRange(1, 1, 1, csvData[0].length).setFontWeight("bold").setBackground("#cfe2f3");
    sheet.autoResizeColumns(1, csvData[0].length);
    
    console.log("Data successfully pushed to the 'Weather' tab.");

  } catch (e) {
    console.error("Error: " + e.toString());
  }
}
