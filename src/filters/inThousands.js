export default function (int) {
  if (!int) {
    return '0K';
  }
  return `${(int / 1000).toFixed(2)}K`;
}
