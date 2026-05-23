
let isloggedin = true;
let userrole = "admin";
// userrole = "editor";
// userrole = "viewer";
// userrole = "unknown";

if (isloggedin) {
    if (userrole === "admin") {
        console.log("Welcome Admin! You have full access.");
    } else if (userrole === "editor") {
        console.log("Welcome Editor! You can edit content.");
    } else if (userrole === "viewer") {
        console.log("Welcome Viewer! You can view content.");
    } else {
        console.log("Welcome User! Your role is not recognized.");
    }
} else {
    console.log("Please log in to access the content.");
}