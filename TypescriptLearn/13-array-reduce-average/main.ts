// !reduce ile toplam & ortalama

const scores: number[] = [80, 92, 11, 28, 100];

const sum = scores.reduce((acc, x) => acc + x, 0);
const avg = sum / scores.length;

console.log({ sum, avg });
