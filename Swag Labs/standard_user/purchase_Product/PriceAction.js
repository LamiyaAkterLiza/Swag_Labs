const PriceObject = require('../purchase_Product/PriceObject.js');

class PriceAction {
    constructor() {
        this.PriceList = [29.99, 9.99, 15.99]; 
        this.expectedSubtotal = this.PriceList.reduce((a, b) => a + b, 0);
        this.expectedTax = parseFloat((this.expectedSubtotal * 0.08).toFixed(2)); 
        this.expectedTotal = parseFloat((this.expectedSubtotal + this.expectedTax).toFixed(2));
    }

    async calculateProductTotal() {
        try {
            const prices = await Promise.all(
                (await PriceObject.productPrices).map(async priceElement => {
                    await priceElement.waitForDisplayed({ timeout: 500 });
                    const priceText = await priceElement.getText();
                    return parseFloat(priceText.replace('$', ''));
                })
            );
            
            // Verify each price matches the PriceList
            for (let i = 0; i < this.PriceList.length; i++) {
                if (prices[i] !== this.PriceList[i]) {
                    throw new Error(`Price mismatch: Expected ${this.PriceList[i]}, got ${prices[i]}`);
                }
            }
            
            return parseFloat(this.expectedSubtotal.toFixed(2));
        } catch (error) {
            console.error('Error calculating product total:', error);
            throw error;
        }
    }

    async getSubtotal() {
        try {
            const subtotalText = await PriceObject.itemTotal.getText();
            const actualSubtotal = parseFloat(subtotalText.replace('Item total: $', '').trim());
            
            if (actualSubtotal !== this.expectedSubtotal) {
                throw new Error(`Subtotal mismatch: Expected ${this.expectedSubtotal}, got ${actualSubtotal}`);
            }
            
            return actualSubtotal;
        } catch (error) {
            console.error('Error getting subtotal:', error);
            throw error;
        }
    }

    async getTax() {
        try {
            const taxText = await PriceObject.taxValue.getText();
            const actualTax = parseFloat(taxText.replace('Tax: $', '').trim());
            
            if (actualTax !== this.expectedTax) {
                throw new Error(`Tax mismatch: Expected ${this.expectedTax}, got ${actualTax}`);
            }
            
            return actualTax;
        } catch (error) {
            console.error('Error getting tax:', error);
            throw error;
        }
    }

    async getTotal() {
        try {
            const totalText = await PriceObject.totalAmount.getText();
            const actualTotal = parseFloat(totalText.replace('Total: $', '').trim());
            
            if (actualTotal !== this.expectedTotal) {
                throw new Error(`Total mismatch: Expected ${this.expectedTotal}, got ${actualTotal}`);
            }
            
            return actualTotal;
        } catch (error) {
            console.error('Error getting total:', error);
            throw error;
        }
    }

    async verifyTotalPrice() {
        try {
            const subtotal = await this.getSubtotal();
            const tax = await this.getTax();
            const total = await this.getTotal();

            return {
                subtotal,
                tax,
                total,
                isValid: subtotal === this.expectedSubtotal && 
                         tax === this.expectedTax && 
                         total === this.expectedTotal
            };
        } catch (error) {
            console.error('Error verifying total price:', error);
            throw error;
        }
    }
}

module.exports = new PriceAction();








