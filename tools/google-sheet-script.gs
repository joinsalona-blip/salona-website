// Salona: save landing-page applications to this Google Sheet
// 1) Open your Google Sheet > Extensions > Apps Script, paste this, Save
// 2) Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone > Deploy
// To update an existing deployment: paste this, Save, then Deploy > Manage deployments > Edit > Version: New version > Deploy (the URL stays the same)
// 3) Copy the Web app URL and send it to Claude (or paste it as SHEET_URL in apply.html)
const HEAD = ['التاريخ','اسم الصالون','الاسم','الجوال','الحي','خرائط Google','إنستغرام','تيك توك','مرخّص','الصفحة','البريد الإلكتروني'];
function doPost(e) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(HEAD);
  const p = e.parameter;
  sh.appendRow([new Date(), p.salon, p.owner, "'" + p.phone, p.district, p.maps, p.instagram, p.tiktok, p.licensed, p.page, p.email || '']);
  return ContentService.createTextOutput('ok');
}
