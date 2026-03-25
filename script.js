function toCase(input) {
    // Step 1: Handle empty string
    if (input.trim() === "") {
        return "";
    }

    // Step 2: Split the string into words
    const words = input.trim().split(/\s+/); // Split by one or more spaces

    // Step 3: Convert each word to lowercase and uppercase
    const result = words.map(word => {
        return word.toLowerCase() + '-' + word.toUpperCase();
    });

    // Step 4: Join the results with a space
    return result.join(' ');
}

}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
