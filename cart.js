class Cart{
    constructor()
    {
        this.cart = [ ];
    }

    addItem(item_id)
    {
        var exist = false;
        this.cart.forEach(element => {
            if(item_id == element.id)
            {
                element.quantity += 1;
                exist = true;
            }
        });
        if(exist == false)
        {
            let _item = {id:item_id,quantity:1}
            this.cart.push(_item);
        }
        
    }

    showDetail()
    {

    }
}