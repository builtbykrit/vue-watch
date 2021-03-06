export default function (int) {
  // Fix undefined errors
  if (!int) {
    return 0;
  }
  const pattern = /(-?\d+)(\d{3})/;
  let x = int.toString();

  while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
  return x;
}
