function repeatStringNumTimes(str, num) {
  var finalString="";
  if(num>0){
    for(var i=0;i<num;i++){
      finalString=finalString+str;
    }
    return finalString;
  }else return "";
}

repeatStringNumTimes("abc", 3);
