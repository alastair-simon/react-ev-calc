export function getFormattedNum(num:number):string {
  const formattedNum = Math.round(num).toLocaleString();
  return formattedNum;
}
