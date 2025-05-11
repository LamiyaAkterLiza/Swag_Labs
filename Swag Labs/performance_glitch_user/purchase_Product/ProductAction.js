const ProductObject = require('../purchase_Product/ProductObject.js');


const productName = 'Test.allTheThings() T-Shirt (Red)';
const ExpectedProduct = 'Test.allTheThings() T-Shirt (Red)';
const ProductPrice = 15.99;


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

    async selectNameZtoA() {
    try {
    
        await ProductObject.sortDropdown.click();
        await browser.pause(500);

        // Select the Z to A option
        const zToAOption = await ProductObject.ClickNameZtoA;
        await zToAOption.click();
        await browser.pause(300);

       
        const currentSort = await ProductObject.sortDropdown.getValue();
        if (currentSort !== 'za') {
            throw new Error('Failed to apply Z to A sorting');
        }
    } catch (error) {
        console.error('Error during sorting:', error);
        throw error;
    }
}
    async ProductAddToCart() {
        await ProductObject.ProductButton.click();
        await browser.pause(2000);
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


    async verifyProductsInCheckout(ExpectedProduct) {
    try {
       
        const cartProducts = await ProductObject.cartProductNames;
        const actualProduct = await cartProducts.getText();


        // Verify product name
        if (actualProduct !== ExpectedProduct) {
            throw new Error(`Product name mismatch. Expected: ${ExpectedProduct}, Got: ${actualProduct}`);
        }

        return true;
    } catch (error) {
        console.error('Product verification failed:', error.message);
        throw error;
    }
}


    async verifyProductPrice(expectedPrice) {
    try {
        
        const productPrices = await ProductObject.productPrices;
        const priceText = await productPrices.getText();
        const actualPrice = parseFloat(priceText.replace('$', ''));

        if (Math.abs(actualPrice - expectedPrice) > 0.01) {
            throw new Error(`Price mismatch: Expected $${expectedPrice}, got $${actualPrice}`);
        }
        
        const subtotalText = await ProductObject.itemTotal.getText();
        const subtotal = parseFloat(subtotalText.replace('Item total: $', '').trim()); 
       
        const taxText = await ProductObject.taxValue.getText();
        const tax = parseFloat(taxText.replace('Tax: $', '').trim());

        const totalText = await ProductObject.totalAmount.getText();
        const total = parseFloat(totalText.replace('Total: $', '').trim());

        const expectedTax = parseFloat((subtotal * 0.08).toFixed(2)); // 8% tax rate
        const expectedTotal = parseFloat((subtotal + expectedTax).toFixed(2));

        return {
            price: actualPrice,
            subtotal,
            tax,
            total,
            isValid: Math.abs(actualPrice - expectedPrice) < 0.01 && 
                    Math.abs(tax - expectedTax) < 0.01 && 
                    Math.abs(total - expectedTotal) < 0.01
        };
    } catch (error) {
        console.error('Error verifying product price:', error);
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