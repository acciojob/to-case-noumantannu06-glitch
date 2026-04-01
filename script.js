function toCase(input) {
	if (text.length === 0) return '-';
  
  const lower = text.toLowerCase();
  const upper = text.toUpperCase();
  
  return lower + '-' + upper;

}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
