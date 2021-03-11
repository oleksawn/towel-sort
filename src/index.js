
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var res = [];
    console.log(matrix);
    if(matrix == undefined){
       return [];
       }
  for(var i = 0; i < matrix.length; i++){
      console.log("matrix[", i ,"] = ",matrix[i])
      if(i % 2 == 0){
          console.log("i = 0,2, = ",i);
         res = res.concat(matrix[i]);
          console.log("res after concat", res);
      }
      else{
          console.log("i = 1,3,5,= ",i);
          res = res.concat(matrix[i].reverse());
          console.log("res after reverse concat", res);
      }
  }
    console.log("res = ", res);
  return res;
}
//module.towelSort([[1,2],[3,4]]);
