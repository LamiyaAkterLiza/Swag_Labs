class PriceObject {
    
    get productPrices() {
        return $$('.inventory_item_price');
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

module.exports = new PriceObject();