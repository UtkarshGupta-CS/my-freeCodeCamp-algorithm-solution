
function findLongestWord(str) {
str=str.split(" ");
  var max=0;
 
  for(var i=0;i<str.length;i++){
    if(str[i].length>max){
     max=str[i].length;
    }
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
