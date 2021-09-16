// import App from './App';
const {Builder, By} = require('selenium-webdriver');
const assert = require("assert");
let driver = new Builder().forBrowser('chrome').build();

(async function test() {
    // Navigate to url
    await driver.get('http://localhost:3000');

    // Get message
    let messageElement = driver.findElement(By.id('root'));
    assert.equal(await messageElement.getText(), 'Hello Alex');
})();