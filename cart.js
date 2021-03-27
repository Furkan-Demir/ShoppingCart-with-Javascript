class Cart{
    constructor()
    {
        this.cart = [ ];
    }

    addItem(item)
    {
        //item = {id:1,quantity:1}
        this.cart.push(item);
    }
}