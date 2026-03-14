/**
 * Floyd's triangle: sequential numbers in rows of increasing length.
 * Row i has i numbers (1, 2, 3, 4, 5...).
 */
const rows = 5;
let num = 1;

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += num;
    if (j < i - 1) line += " ";
    num++;
  }
  console.log(line);
}
