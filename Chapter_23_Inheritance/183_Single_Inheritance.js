// understand the concept of Inheritance in JavaScript with simple example

class BasePage {

    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log("Opening the page ");
    }
    close() {
        console.log("Closing the page ");
    }
}

class LoginPage extends BasePage {

}

const page = new LoginPage();
page.open();
page.close();