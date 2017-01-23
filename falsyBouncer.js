
function bouncer(arr) {

  var falsy=[false,null,0,"",undefined,NaN];

  return arr.filter(function(value){
     if(value!==falsy){return value;}
     else return false;
  });
}

bouncer([7, "ate", "", false, 9]);
