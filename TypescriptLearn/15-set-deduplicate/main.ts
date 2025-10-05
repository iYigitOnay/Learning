// !Set ile tekrarı silmek

const raw: number[] = [1, 2, 2, 3, 3, 3, 4];
const uniq = Array.from(new Set(raw));
console.log(uniq);
