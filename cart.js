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

    showDetail(p)
    {
        var detail = [ ];
        this.cart.forEach(cart_item => {
            
            p.forEach(product_item => {
                
                if(cart_item.id == product_item.id)
                {
                    detail.push({id:cart_item.id, price:product_item.price, total: product_item.price*cart_item.quantity, image: product_item.img});
                }

            });

        });
        return detail;
    }
}