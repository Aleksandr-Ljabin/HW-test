export default function hero(arr) {
  let result;
  const x = arr.health;
  if (x < 15) {
    result = 'critical';
  } else if (x <= 50) {
    result = 'wounded';
  } else if (x > 50) {
    result = 'healthy';
  }
  return result;
}
