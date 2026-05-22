// nullish operator (??) : null

let a = null;
console.log(a);  // null

// nullish coalescing operator (??) : null or undefined
let b = null;
let c = b ?? "default value";
console.log(c);  // "default value"

let d = undefined;
let e = d ?? "default value";
console.log(e);  // "default value"


let f = 0;
let g = f ?? "default value";
console.log(g);  // 0 (because 0 is not null or undefined)

let h = "";
let i = h ?? "default value";
console.log(i);  // ""

let j = false;
let k = j ?? "default value";
console.log(k);  // false

let l = NaN;
let m = l ?? "default value";
console.log(m);  // NaN


