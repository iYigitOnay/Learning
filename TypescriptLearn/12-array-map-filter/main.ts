// !map & filter ile veri dönüştürme

type Person = { name: String; age: number };

const People: Person[] = [
  { name: "Yiğit", age: 23 },
  { name: "Melisa", age: 22 },
];

const names = People.map((p) => p.name);
const adults = People.filter((p) => p.age >= 23);

console.log(names);
console.log(adults);
