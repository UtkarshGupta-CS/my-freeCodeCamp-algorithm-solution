
function chunkArrayInGroups(arr, size) {
  var newArr=[];
  for(var i=0;i<arr.length ;i++){
    newArr.push(arr.slice(i,i+size));
    for(var k=0;k<size-1;k++){
      i++;
    }
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
