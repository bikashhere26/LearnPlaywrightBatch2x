interface Bugreport {
    id: number;
    title: string;
    description: string;
    status: "open" | "in progress" | "closed";
    priority: "low" | "medium" | "high";
}

const bugreport1: Bugreport = {
    id: 1,
    title: "Login button not working",
    description: "The login button does not respond when clicked.",
    status: "open",
    priority: "high"
}

const bugreport2: Bugreport = {
    id: 2,
    title: "Page crashes on load",
    description: "The application crashes when the home page is loaded.",
    status: "in progress",
    priority: "medium"
}

console.log("Bug Report 1: " + bugreport1.title + " → Status: " + bugreport1.status + ", Priority: " + bugreport1.priority);
console.log("Bug Report 2: " + bugreport2.title + " → Status: " + bugreport2.status + ", Priority: " + bugreport2.priority);