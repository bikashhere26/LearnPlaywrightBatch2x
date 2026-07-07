export const severityLevels = {
    low: "low",
    Medium: "Medium",
    High: "High",
    Critical: "Critical",
    Blocking: "Blocking"
} as const;

export type severityLevels = typeof severityLevels[keyof typeof severityLevels];

console.log("Severity Level: " + severityLevels.Critical);


enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);