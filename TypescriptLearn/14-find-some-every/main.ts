// !eleman arama & doğrulama

const emails: string[] = ["a@maku.edu.tr", "b@maku.edu.tr", "c@maku.edu.tr"];

const firstEdu = emails.find((e) => e.endsWith(".edu.tr"));
const hasGmail = emails.some((e) => e.includes("@gmail.com"));
const allValid = emails.every((e) => e.includes("@"));

console.log({ firstEdu, hasGmail, allValid });
