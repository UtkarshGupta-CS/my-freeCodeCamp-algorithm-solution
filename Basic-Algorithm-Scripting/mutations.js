
function mutation(arr) {
  var count=0;
  for(var j=0;j<arr.length;j++){
    arr[j]=arr[j].toLowerCase();
  }
  for(var i=0;i<arr[1].length;i++){
    if(arr[0].indexOf(arr[1][i])!==-1){
      count++;
    }
    else break;
  }
 if(count==arr[1].length){
    return true;
  }
  else return false;
  
  }
mutation(["floor", "fore"]);