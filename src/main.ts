/**
 * @FileName main.ts
 * @author nontitleG
 * @version 1.0
 * @ripository
**/

function main(): void {

  let sheet: any = getMainSpreadSheet();
  // let arrayURL: string[] = new Array();
  let arrayURL: {key?: string:} = new Array();
  let countData: number = 0;

  // set Cell area
  const startColumn: number = 1;
  const insertColumn: number = 2;
  const getColumnNum: number = 1;
  const startRow: number = 2;
  const getLastRow: number = sheet.getLastRow() - 1;

  // get Cell datas
  let getArrayASIN: array = sheet.getRange(startRow, startColumn, getLastRow, getColumnNum).getValues();

  // image
  const height: string = 100;
  const width: string = 100;
  const imageCategory: string = 4;

  // make URL
  for(let getASINDataNum: string in getArrayASIN){

    let getASINData = getArrayASIN[getASINDataNum];

    // make image URL
    let amazonURL: string = '"http://images-jp.amazon.com/images/P/' + getASINData + '.09.MAIN._SCMZZZZZZZ_.jpg"';
    let imageURL: string = "IMAGE(" + amazonURL + "," + imageCategory + "," + height + "," + width + ")";

    // make product URL
    let productURL: string = '"https://www.amazon.co.jp/gp/product/' + getASINData + '"';
    let completedURL: string =  "=HYPERLINK(" + productURL + ","+ imageURL +")";

    // make URL list
    arrayURL[countData] = [completedURL];

    countData++
  }

    // insert data
    sheet.getRange(startRow, insertColumn, getLastRow).setValues(arrayURL);
}
