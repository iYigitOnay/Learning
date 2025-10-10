function safeParse(json: string): unknown {
  try { return JSON.parse(json); }
  catch { return null; }
}

const data: unknown = safeParse('{"age":23}');
if (typeof data === "object" && data !== null && "age" in data) {
  console.log((data as { age: number }).age + 1);
}
