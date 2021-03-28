var items = [{id:1,name:"İçliköfte",desc:"Deneme",price:10,img:"/#"},{id:2,name:"İçliköfte",desc:"zazaza",price:2,img:"/#"}];
var p = new Products(items);
var cart = new Cart();
p.reload();

function Add(_id)
{
    cart.addItem(_id);
    console.log(cart.showDetail(p.items));
    cart.listinCart(p.items);
}
