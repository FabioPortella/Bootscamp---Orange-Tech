var s = "";
var isValid = teste(s);
function teste(s) {    
    let stack = []; 
    stack = stack.concat(s.split(""));
    console.log(stack);
if ((stack[0] === "(") && (stack[1] === ")")) return true;
else if ((stack[0] === "[") && (stack[1] === "]")) return true;
else if ((stack[0] === "{") && (stack[1] === "}")) return true;
else if ((stack.length === 0)) return true;
else return false;

}

console.log(isValid);


