const loginAction = require("../Swag Labs/locked_out_user/loginAction.js");

const userName = "locked_out_user";
const password = "secret_sauce"

describe('Locked_Out_User Login Test', () => {
    it('successfully show error message for locked_out_user', async () => {
        await browser.url('https://www.saucedemo.com/');
        await loginAction.InputUserName(userName);
        await browser.pause(5000);
        await loginAction.InputPassword(password);
        await browser.pause(5000);
        await loginAction.ClickloginButton();
        const errorMessage = await loginAction.getErrorMessage();
        await browser.pause(5000);
        expect(errorMessage).toEqual("Epic sadface: Sorry, this user has been locked out.");
    });
});