var items = [{id:1,name:"İçliköfte",desc:"Deneme",price:10},{id:2,name:"İçliköfte",desc:"zazaza",price:10}];
var p = new Products(items);
var cart = new Cart();
p.reload();

function Add(_id)
{
    cart.addItem(_id)
}