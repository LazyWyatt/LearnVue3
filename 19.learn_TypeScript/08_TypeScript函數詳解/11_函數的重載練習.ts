//聯合類型
// function getLength(args: string | any[]) {
//   return args.length
// }


// console.log(getLength("abc"));
// console.log(getLength([123, 321, 333]));


// 函數重載
function getLength(args: string): number;
function getLength(args: any[]): number;

function getLength(args: any): number {
  return args.length;
}

console.log(getLength("abc"));
console.log(getLength([123, 321, 333]));
