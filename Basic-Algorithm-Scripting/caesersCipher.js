function encodedChar(char){
  var charCode=char.charCodeAt(0);
 
  if(charCode>=65&&charCode<=77){
    charCode+=13;
  }else if(charCode>=78&&charCode<=90){
    charCode =charCode-13;
  }
  return String.fromCharCode(charCode);
}


function rot13(str) { // LBH QVQ VG!
  var encodedStr=[];
  for(var i=0;i<str.length;i++){
    encodedStr.push(encodedChar(str[i]));
  }
  return encodedStr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


