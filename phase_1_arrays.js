
// Array.prototype.uniq = function uniq() {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (!result.includes(this[i])) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

Array.prototype.uniq = function() {
  let result = new Array;
  this.forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });





// Array.prototype.twoSum = function twoSum() {
//   const result = [];
//
//   for (let i = 0; i < this.length; i++) {
//     for (let j = (i + 1); j < this.length; j++) {
//       if (this[i] + this[j] === 0 ) {
//         result.push([i, j]);
//       }
//     }
//   }
//   return result;
// };

Array.prototype.twoSum = function() {
  let opps = {};
  for(let i = 0; i < this.length; i++) {
    opps[this[i]] = i;
  }

  let pairs = [];
  this.forEach(num => {
    if (opps[-1 * num]) {
      pairs.push([opps[num], opps[-1 * num]]);
      delete opps[num];
      delete opps[num * -1];
    }
  });

  return pairs;
};

Array.prototype.transpose = function transpose(){
  const result=[];
  let subarray=[];
  for (let i = 0; i <this.length; i++){
    for(let j = 0; j<this.length; j++){
       subarray.push(this[j][i]);
    }
    result.push(subarray);
    subarray=[];
  }
  return result;
};
