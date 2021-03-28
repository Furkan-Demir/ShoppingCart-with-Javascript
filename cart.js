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
                    detail.push({id:cart_item.id, name: product_item.name ,price:product_item.price, total: product_item.price*cart_item.quantity,quantity:cart_item.quantity , image: product_item.img});
                }

            });

        });
        return detail;
    }

    listinCart(p)
    {
        var detail = this.showDetail(p);
        console.log(detail);
        var html = "";
        detail.forEach(item => {
            html += `<li class="list-group-item">${item.name} ${item.quantity}</li>`;
        });
        document.getElementById('myCart').innerHTML = html;
        var total = 0;
        detail.forEach(element => {
            total += element.total;
        });
        document.getElementById('totalPrice').innerText = total;
    }
}