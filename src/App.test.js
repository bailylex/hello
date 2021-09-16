const {Builder, By} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

// Assertion with jest
test('greetings', async () => {
    // Navigate to url
    await driver.get('http://localhost:3000');

    // Get message Element
    let messageElement = await driver.findElement(By.id('root')).getText();


    expect(messageElement).toBe('Hello Alex');
});