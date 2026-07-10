// Type As

let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-btn",
    disabled: false
}
interface Element {
    tagName: string;
    textContent: string;
    id: string;
    disabled: boolean;
}
let button = element as Element;
console.log(button.tagName);
console.log(button.textContent);
console.log(button.id);
console.log(button.disabled);

