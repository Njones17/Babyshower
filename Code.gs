function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var name        = e.parameter.name        || '';
    var email       = e.parameter.email       || '';
    var attending   = e.parameter.attending   || '';
    var note        = e.parameter.note        || '';
    var submittedAt = e.parameter.submittedAt || new Date().toISOString();
    sheet.appendRow([submittedAt, name, email, attending, note]);
    return ContentService.createTextOutput(JSON.stringify({result:'ok'})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({result:'error',error:err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({result:'ok',message:'RSVP endpoint is live'})).setMimeType(ContentService.MimeType.JSON);
}
