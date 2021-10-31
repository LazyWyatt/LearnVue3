
// Point: x/y
// {x:number, y:number}
function printPoint(point: {x:number, y:number, z?:number}) {
  console.log(point.x)
  console.log(point.y)
}

printPoint({x: 123, y:321 });
printPoint({x: 123, y:321 , z:789});

export {}