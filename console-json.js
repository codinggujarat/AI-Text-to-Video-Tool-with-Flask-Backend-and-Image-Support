// console-json.js

// Define a sample user object
const user = {
  id: 101,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  isActive: true,
  roles: ["user", "editor"],
  profile: {
    age: 30,
    country: "Canada",
    preferences: {
      theme: "light",
      language: "en"
    }
  }
};

// Convert object to formatted JSON
const jsonOutput = JSON.stringify(user, null, 2);

// Output JSON to console
console.log(jsonOutput);

// Done message
console.log("JSON data logged successfully.");
