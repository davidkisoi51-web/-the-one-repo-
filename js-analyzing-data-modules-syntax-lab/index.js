require('datejs'); 

function combineUsers(...args) {
    // 1. Initialize the return object
    let combinedObject = {
        users: []
    };

    // 2. Loop through args and merge
    for (let currentArray of args) {
        combinedObject.users.push(...currentArray);
    }

    // 3. Set the date
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    // 4. Return the result
    return combinedObject;
}

// This is the specific export the lab requires
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};