function toCase(input) {
if(input.length===0){
        return'-';
    }
    var lower=input.toLowerCase();
    var upper=input.toUpperCase();
    return lower+'-'+upper;

}



// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
