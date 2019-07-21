/**
 * @FileName onOpen.ts
 * @author nontitleG
**/

/**
 * add original menu
 * @name onOpen
 * @description exec when open spreadsheet
 * @return [boolean] null
**/
function onOpen(): void {

  // make menulist
  var spreadsheetUi = SpreadsheetApp.getUi();
  var menu = spreadsheetUi.createMenu('getImageMenu');

  // add menu to menulist
  menu.addItem('Start Get Images', 'main');
  menu.addToUi();
}
