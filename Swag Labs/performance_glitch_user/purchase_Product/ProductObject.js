class ProductObject {

    get ClickmenuButton() { 
        return $('#react-burger-menu-btn'); 
    }
    get resetAppState() { 
        return $('[data-test="reset-sidebar-link"]'); 
    }

    get ClickCrossButton() {
        return $('#react-burger-cross-btn');
    }

    get sortDropdown() {
        return $('.product_sort_container');
    }

    get ClickNameZtoA() {
        return $('select.product_sort_container option[value="za"]');
    }

    get ProductButton() {
        return $("//button[contains(@name, 'add-to-cart-test.allthethings()-t-shirt-(red)')]");  
    }

    get ClickCartButton() {
        return $('[data-test="shopping-cart-link"]'); 
    }

    get ClickCheckoutButton() {
        return $('[data-test="checkout"]'); 
    }

    get EnterfirstName() { 
        return $('[data-test="firstName"]'); 
    }

    get EnterlastName() { 
        return $('[data-test="lastName"]'); 
    }

    get EnterPostalCode() { 
        return $('[data-test="postalCode"]'); 
    }

    get cartItems() {
        return $('.cart_item');  
    }

    get productname() {
        return $('.inventory_item_name');  
    }

    get cartProductNames() {
        return $('.cart_item .inventory_item_name');  
    }
  
    get ClickContinueButton() { 
        return $('[data-test="continue"]'); 
    }

    get finishButton() { 
        return $('[data-test="finish"]'); 
    }

    get successMsg() { 
        return $('[data-test="complete-header"]'); 
    }

    get ClickbackHomeButton() {
        return $('[data-test="back-to-products"]'); 
    }

    get logOut() { 
        return $('[data-test="logout-sidebar-link"]'); 
    }

    
    // Get the product prices from the cart
    get productPrices() {
        return $('.inventory_item_price');
    }

    get itemTotal() {
        return $('.summary_subtotal_label');
    }

    get taxValue() {
        return $('.summary_tax_label');
    }

    get totalAmount() {
        return $('.summary_total_label');
    }
}

module.exports = new ProductObject();