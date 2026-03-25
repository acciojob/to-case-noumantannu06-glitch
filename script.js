function toCase(input) {
    // Step 1: Handle empty string
    if (input.trim() === "") {
        return ""; 
    }

    // Step 2: Split the string into words
    const words = input.trim().split(/\s+/); 

    // Step 3: Convert each word to lowercase and uppercase
    const result = words.map(word => {
        return word.toLowerCase() + '-' + word.toUpperCase(); // Combine lowercase and uppercase with '-'
    });

    // Step 4: Join the results with a space
    return result.join(' '); // Join with a space to form the final output
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
