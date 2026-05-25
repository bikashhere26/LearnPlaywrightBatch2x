// Question 4 — Build Health Reporter

// Problem: Given the percentage of test cases passed in a CI build, report build health.

// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)

let test_cases_passed_percentage = 65;

if (test_cases_passed_percentage === 100) {
    console.log("🟢 Green Build");
} else if (test_cases_passed_percentage >= 90 && test_cases_passed_percentage <= 99) {
    console.log("🟡 Stable (investigate failures)");
} else if (test_cases_passed_percentage >= 70 && test_cases_passed_percentage <= 89) {
    console.log("🟠 Unstable");
} else if (test_cases_passed_percentage < 70) {
    console.log("🔴 Broken Build (block deployment)");
} else {
    console.log("Invalid percentage");
}
