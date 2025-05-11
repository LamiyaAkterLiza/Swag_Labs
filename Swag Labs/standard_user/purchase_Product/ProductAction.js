const ProductObject = require('../purchase_Product/ProductObject.js');

const ProductList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];
const expectedProducts = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

class ProductAction { 
    async resetAppState() {
        await ProductObject.ClickmenuButton.click();
        await browser.pause(500); 
        await ProductObject.resetAppState.click();  
        await browser.pause(500);     
    }

    async CrossButton() {
        await ProductObject.ClickCrossButton.click();
        await browser.pause(500);
    }

    async ProductAddToCart(ProductList) {
        const productButtons = await ProductObject.ProductButtons;

        for (let i = 0; i < ProductList.length; i++) {
            const productName = ProductList[i];

            // Find the button that matches the product name
            for (const button of productButtons) {
                const buttonText = await button.getAttribute('name'); 
                if (buttonText.includes(productName.toLowerCase().replace(/\s+/g, '-'))) {
                    await button.click();
                    await browser.pause(2000);
                    break;
                }
            }
        }
        await ProductObject.ClickCartButton.click(); 
        await browser.pause(2000);
    }  
     
    async goToCheckoutPage() {    
        await ProductObject.ClickCheckoutButton.click();
        await browser.pause(2000);
        await ProductObject.EnterfirstName.setValue('Lamiya');
        await browser.pause(2000);
        await ProductObject.EnterlastName.setValue('Liza');
        await browser.pause(2000);
        await ProductObject.EnterPostalCode.setValue('12345');
        await browser.pause(2000);
        await ProductObject.ClickContinueButton.click();
        await browser.pause(2000);
    }

    async verifyProductsInCheckout(expectedProducts) {
    try {
       
        const cartProducts = await ProductObject.cartProductNames;

        // Get actual product names
        const actualProducts = [];
        for (const product of cartProducts) {
            const productName = await product.getText();
            actualProducts.push(productName);
        }

        // Compare products
        const missingProducts = expectedProducts.filter(
            product => !actualProducts.includes(product)
        );

        if (missingProducts.length > 0) {
            throw new Error(`Missing products in cart: ${missingProducts.join(', ')}`);
        }

        return true; 
    } catch (error) {
        console.error('Cart verification failed:', error.message);
        throw error;
    }
}

    async finishCheckoutAndVerify() {
        await ProductObject.finishButton.click();
        await browser.pause(2000);
        const successText = await ProductObject.successMsg.getText();
        if (successText !== 'Thank you for your order!') {
            throw new Error('Order confirmation message not found.');
        }
        await ProductObject.ClickbackHomeButton.click();
        await browser.pause(2000);
    }

    async Logout() {
        await ProductObject.logOut.click();
        await browser.pause(2000);
    }
}

module.exports = new ProductAction();
