export function add(x: number, y: number) {
  return x + y;
}

export function subtr(x: number, y: number) {
  return x - y;
}

export function sum(...num: number[]) {
  let _sum = 0;
  num.forEach(n => (_sum = add(_sum, n)));
  return _sum;
}
