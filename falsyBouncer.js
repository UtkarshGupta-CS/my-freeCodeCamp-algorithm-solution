function bouncer(arr) {

  var falsy=[false,null,0,"",undefined,NaN];

  function falsyValues(value){
    if(value!==falsy){
      return value;
    }else return false;
  }
  return arr.filter(falsyValues);
}

bouncer([7, "ate", "", false, 9]);
