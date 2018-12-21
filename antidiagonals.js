
var a = [ [1, 2, 3], 
          [4, 5, 6], 
          [7, 8, 9] ]

// output: 1,2,4,3,5,7,6,8,9


var size = a.length * a.length;

var x=0
var y=0
var xstart=0;
var ystart=0;
for(var n=0; n < size; n++) {
  console.log(x, y, a[y][x])
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


