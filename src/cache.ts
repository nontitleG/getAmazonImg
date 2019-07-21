/**
 * @FileName cache.ts
 * @author nontitleG
 * @version 1.0
**/


/**
 * @name getMainSpreadSheet
 * @description spreadsheet make cache
 * @return [data] getMainSpreadSheet.memoSheet
**/
function getMainSpreadSheet(): any {

  if( getMainSpreadSheet.memoSheet ){
    return getMainSpreadSheet.memoSheet;
  }else{

    // open spreadsheet
    let spreadsheet: any = SpreadsheetApp.getActiveSpreadsheet();
    let sheet: any = spreadsheet.getActiveSheet();

    // make cache
    getMainSpreadSheet.memoSheet = sheet;

    return getMainSpreadSheet.memoSheet;
  }
}
