//Converts a comma-separated values string to a 2D array
//watch out the working sample - https://stackblitz.com/edit/js-sges19?file=index.js
const csv_to_array = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

console.log(csv_to_array("a,b\nc,d"));
console.log(csv_to_array("a;b\nc;d", ";"));
console.log(csv_to_array("head1,head2\na,b\nc,d", ",", true));
