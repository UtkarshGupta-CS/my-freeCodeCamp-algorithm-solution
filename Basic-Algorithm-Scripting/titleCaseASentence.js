function titleCase(str) {
  str=str.split(" ");
  for(var i=0;i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].substring(1).toLowerCase();
  }
  return str.join(' ');
}

titleCase("I'm a little tea pot");
