// Create a user object
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isAdmin: false,
  preferences: {
    theme: "dark",
    notifications: true
  },
  hobbies: ["reading", "coding", "hiking"]
};

// Function to convert to JSON
function printJson(obj) {
  const jsonString = JSON.stringify(obj, null, 2); // Pretty print with 2-space indent
  console.log(jsonString);
}

// Main execution
printJson(user);

// End message
console.log("JSON output complete.");
