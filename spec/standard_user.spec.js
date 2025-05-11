const loginAction = require('../Swag Labs/standard_user/login/loginAction.js');
const ProductAction = require('../Swag Labs/standard_user/purchase_Product/ProductAction.js');
const PriceAction = require('../Swag Labs/standard_user/purchase_Product/PriceAction.js');

const userName = "standard_user";
const password = "secret_sauce"

const productList = ['Sauce Labs Backpack','Sauce Labs Bike Light','Sauce Labs Bolt T-Shirt'];
const expectedProducts = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

                                        

describe('Standard_User Product Purchase Test', () => {
    

    it('Successfully Standard_User login', async () => {
        await browser.url('https://www.saucedemo.com/');
        await loginAction.InputUserName(userName);
        await browser.pause(2000);  
        await loginAction.InputPassword(password);
        await browser.pause(2000);
        await loginAction.ClickloginButton();
        await browser.pause(2000);
    });

    it('Successfully Add Products to cart', async () => {
        await ProductAction.resetAppState();
        await browser.pause(3000);
        await ProductAction.CrossButton();
        await browser.pause(3000);
        await ProductAction.ProductAddToCart(productList);
        await browser.pause(2000);      
    });

    it('Successfully Go to Checkout Page', async () => {
        await ProductAction.goToCheckoutPage();
        await browser.pause(2000);  
    });

    it('Successfully Verify ProductsNames In Checkout page', async () => {
        await ProductAction.verifyProductsInCheckout(expectedProducts);
        await browser.pause(2000);  
    });

    it('Successfully Verify Product Prices and Totals', async () => {
        const result = await PriceAction.verifyTotalPrice();
        expect(result.isValid).toBe(true);
    });

    it('Successfully Verify the Successful Order Message.', async () => {
        await ProductAction.finishCheckoutAndVerify();
        await browser.pause(2000);  
    });
 
    it('Successfully Reset The App State', async () => {
        await ProductAction.resetAppState();
        await browser.pause(2000);  
    });

    it('Successfully Logout', async () => {
        await ProductAction.Logout();
        await browser.pause(2000);  
    });

});







