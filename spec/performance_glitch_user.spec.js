const loginAction = require("../Swag Labs/performance_glitch_user/login/loginAction.js");
const ProductAction = require('../Swag Labs/performance_glitch_user/purchase_Product/ProductAction.js');


const productName = 'Test.allTheThings() T-Shirt (Red)';
const ExpectedProduct = 'Test.allTheThings() T-Shirt (Red)';
const ProductPrice = 15.99;


const userName = "performance_glitch_user";
const password = "secret_sauce"

describe('performance_glitch_user Product Purchase Test', () => {

    it('Successfully performance_glitch_user login', async () => {
        await browser.url('https://www.saucedemo.com/');
        await loginAction.InputUserName(userName);
        await browser.pause(2000);  
        await loginAction.InputPassword(password);
        await browser.pause(2000);
        await loginAction.ClickloginButton();
        await browser.pause(500);
    });

    it('Successfully Reset The App State', async () => {
        await ProductAction.resetAppState();
        await browser.pause(2000);
        await ProductAction.CrossButton();
        await browser.pause(2000);
    });

    it('Successfully Sort Products by Name from Z to A', async () => {
        await ProductAction.selectNameZtoA();
    });

    it('Successfully Add product to Cart', async () => {
        await ProductAction.ProductAddToCart(productName);
        await browser.pause(2000);      
    });

    it('Successfully Go to Checkout Page', async () => {
        await ProductAction.goToCheckoutPage();
        await browser.pause(2000);  
    });
    
    it('Successfully Verify ProductsName In Checkout page', async () => {
        await ProductAction.verifyProductsInCheckout(ExpectedProduct);
        await browser.pause(2000);  
    });

    it('Successfully Verify Product price and total', async () => {
        const result = await ProductAction.verifyProductPrice(ProductPrice);
        expect(result.isValid).toBe(true);
        expect(result.price).toBe(ProductPrice);
    });

    it('Successfully Verify the Successful Order Message.', async () => {
        await ProductAction.finishCheckoutAndVerify();
        await browser.pause(2000);
        await ProductAction.resetAppState();
        await browser.pause(2000);    
    });
    
    it('Successfully Logout', async () => {
        await ProductAction.Logout();
        await browser.pause(2000);  
    });

})