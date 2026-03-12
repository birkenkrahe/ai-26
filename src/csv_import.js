function importCsvFromUrl() {

    const url = "PASTE_YOUR_RAW_CSV_URL_HERE";

    const response = UrlFetchApp.fetch(url);
    const csv = response.getContentText();
    const data = Utilities.parseCsv(csv);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear();

    sheet.getRange(1,1,data.length,data[0].length).setValues(data);

}
