/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15"
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",]
  }
}
`;
// ============================================
// ✅ Corrected Version
// ============================================
{
    "hotelName": "Grand City Hotel",
    "checkInDate": "2024-05-15", // missing comma. JSON requires commas between key-value pairs.
    "checkOutDate": "2024-05-20",
    "guests": [
      {
        "name": "Alice Johnson", // unquoted key "name". JSON keys must be strings in double quotes.
        "age": 30,
        "email": "alice.johnson@example.com"
      },
      {
        "name": "Bob Smith",
        "age": null, // invaled value "undefined". Only null.
        "email": "bob.smith@example"
      }
    ],
    "roomDetails": {
      "type": "Suite",
      "pricePerNight": 200,
      "amenities": ["WiFi", "Breakfast", "Parking"] // trailing coma after "parking". Trailing commas are not allowed in JSON arrays or objects.
    }
  }

// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
        I used https://jsonlint.com/
2️⃣ How did you confirm that your corrected JSON file was valid?
        Using https://jsonlint.com/ to validate my corrected code.
3️⃣ Which errors were the most difficult to spot? Why?
        Commas were the hardest to spot. They are so small that sometimes it's easy to miss.
4️⃣ What strategies can help you avoid these errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
        Using linters helps correct human errors.
*/
