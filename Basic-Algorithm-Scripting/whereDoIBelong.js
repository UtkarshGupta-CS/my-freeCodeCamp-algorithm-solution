function getIndexToIns(arr, num) {
  arr=arr.sort(function(a,b){
    return a-b;
  });
  for(i=0;i<arr.length;i++){
    if(num<=arr[i]){
      arr.splice(i,0,num);
      return i;
    }else if(num>arr[(arr.length)-1]){
      return arr.length;
    }
  }
}
getIndexToIns([2, 5, 10], 15);
