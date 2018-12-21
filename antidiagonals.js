
var a = [ [1, 2, 3], 
          [4, 5, 6], 
          [7, 8, 9] ]

// output: 1,2,4,3,5,7,6,8,9


// --------------------------------------------------- SOLUTIONS BELOW ----------------------------

function antiDiagonal1(a) {
  let x=0
  let y=0
  let xstart=0;
  let ystart=0;
  let size = a.length * a.length;

  let res =[];

  for(let n=0; n < size; n++) {
    res.push(a[y][x]);
    x=x-1;
    y=y+1;
    if(y>=a.length) {
      xstart=a.length-1;
      ystart++;
      x=xstart;
      y=ystart;
    }
    if(x<0) {
     xstart++;
     if(xstart>=a.length) {
       xstart=a.length-1;
       ystart++;
     }
     x=xstart;
     y=ystart;
    }
  }

  return res;
}

function antiDiagonal(a) {
  var size = a.length;
  var res = [];
  if(size == 0)
      return res;
  for(var d = 0; d <= 2*(size-1); d++) {
     for(var i = 0; i <= d; i++) {
         var j = d - i;
         //continue if i or j exceeds their bounds
         if(i >= size || j >= size)
              continue;
         res.push(a[i][j]);
     }
  }
  return res;
}

console.log(antiDiagonal1(a));
console.log(antiDiagonal(a));

