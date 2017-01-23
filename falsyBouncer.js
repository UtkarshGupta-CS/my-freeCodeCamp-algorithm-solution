function bouncer(arr) {

  var falsy = [false, null, 0, "", undefined, NaN];

  var filtered = arr.filter(function (value) {
    if (value !== falsy) {
      return value;
    } else return false;
  });
  console.log(filtered);
}
bouncer([7, "ate", "", false, 9]);

