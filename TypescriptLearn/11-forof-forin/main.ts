// !for...of vs for...in (dizi & nesne üzerinde gezinme)

const arr: string[] = ["Yiğit", "Melisa"]; //! İterable yapıların (Array, Set, Map, string) elemanlarının kendisini döner.
for (const name of arr) {
  console.log(name);
}

const users = { id: 1, name: "Yiğit", role: "Software Engineer" }; // !Nesnelerin anahtarlarını (property isimlerini) döner.
for (const key in users) {
  console.log(key, (user as any)[key]);
}
