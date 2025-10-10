type Profile = { name: String; contact?: { email?: String } };

const p1: Profile = { name: "Yiğit" };
const p2: Profile = { name: "Mely", contact: { email: "" } };

const email1 = p1.contact?.email ?? "yok";
const email2 = p1.contact?.email ?? "yok";

console.log({ email1, email2 });
