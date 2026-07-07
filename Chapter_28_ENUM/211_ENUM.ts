// Enum-like concept in TypeScript using a const object and type alias

export const Status = {
    PASS: "PASS",
    FAIL: "FAIL",
    Skip: "SKIP",
    Pending: "PENDING",
    BLOCKED: "BLOCKED"
} as const;

export type Status = typeof Status[keyof typeof Status];

console.log("Test Status: " + Status.PASS);