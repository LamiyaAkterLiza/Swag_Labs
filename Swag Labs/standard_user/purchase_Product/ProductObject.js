class ProductObject {

    get ClickmenuButton() { 
        return $('#react-burger-menu-btn'); 
    }
    get resetAppState() { 
        return $("//a[@data-test='reset-sidebar-link']"); 
    }
    get ClickCrossButton() {
        return $("//button[@id='react-burger-cross-btn']");
    }
    get ProductButtons() {
        return $$("//button[contains(@name, 'add-to-cart')]");
    }
    get ClickCartButton() {
        return $("//a[@data-test='shopping-cart-link']"); 
    }
    get ClickCheckoutButton() {
        return $("//button[@data-test='checkout']"); 
    }
    get EnterfirstName() { 
        return $("//input[@data-test='firstName']"); 
    }
    get EnterlastName() { 
        return $("//input[@data-test='lastName']"); 
    }
    get EnterPostalCode() { 
        return $("//input[@data-test='postalCode']"); 
    }
    get cartItems() {
        return $$("//div[@data-test='inventory-item-name']");
    }
    get productNames() {
        return $$('div.inventory_item_name');
    }
    get cartProductNames() {
        return $$('div.inventory_item_name');
    }
    get ClickContinueButton() { 
        return $("//input[@data-test='continue']"); 
    }
    get finishButton() { 
        return $("//button[@data-test='finish']"); 
    }
    get successMsg() { 
        return $("//h2[@data-test='complete-header']"); 
    }
    get ClickbackHomeButton() {
        return $("//button[@name='back-to-products']"); 
    }
    get logOut() { 
        return $("//a[@data-test='logout-sidebar-link']"); 
    }
}

module.exports = new ProductObject();
