function destroyer(arr) {
    for(var i=1;i<arguments.length;i++){
      arr= arr.filter(function (value){
      return value!==this.valueOf();
    },arguments[i]);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);