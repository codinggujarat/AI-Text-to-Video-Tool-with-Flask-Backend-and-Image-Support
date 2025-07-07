- // Simple object logging
- const obj = { name: "Alice", age: 25, admin: true };
- console.log(obj); // Logs object directly

+ // Pretty-printed JSON logging
+ const obj = { name: "Alice", age: 25, admin: true };
+ const json = JSON.stringify(obj, null, 2);
+ console.log(json); // Logs as JSON string
