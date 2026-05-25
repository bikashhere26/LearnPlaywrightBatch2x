// group condition in switch statement

let day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

let browser = "edge";

switch (browser) {
  case "chrome":
  case "firefox":
  case "safari":
  case "opera":
    console.log("Supported browser");
    break;
  case "edge":
    console.log("Partially supported browser");
    break;
  default:
    console.log("Unsupported browser");
}

let browser1 = "Firefox";

switch (browser1) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}