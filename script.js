function toCase(text) {
  // write your code here
	function toCase(text) {
  if (text.length === 0) return '-';
  
  const lower = text.toLowerCase();
  const upper = text.toLowerCase().toUpperCase();
  
  return lower + '-' + upper;
}

}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
