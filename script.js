function toCase(input) {
if (input.length === 0) return '-';  
  
  const lower = input.toLowerCase();    
  const upper = input.toUpperCase();    
  
  return `${lower}-${upper}`;

}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
