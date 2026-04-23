function createLoginTracker(userInfo) {
  // Step 1: Initialize Login Tracking
  let attemptCount = 0;

  // Define and Return an Inner Arrow Function
  return (passwordAttempt) => {
    // Step 2: Increment attemptCount
    attemptCount++;

    // Account Lock Check (Done first so we don't bother checking passwords if locked)
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Password Check
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Login failed. Attempt ${attemptCount} of 3`;
    }
  };
}

// --- Example Usage / Testing ---
const user = {
    username: "user1",
    password: "password123"
};

const login = createLoginTracker(user);

console.log(login("wrongPass")); // Login failed. Attempt 1 of 3
console.log(login("wrongPass")); // Login failed. Attempt 2 of 3
console.log(login("wrongPass")); // Login failed. Attempt 3 of 3
console.log(login("password123")); // Account locked due to too many failed login attempts


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
