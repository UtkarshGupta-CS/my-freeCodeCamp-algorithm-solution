function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  var len = str.length - 1;
  for(var i = 0; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}



palindrome("eye");

