class Products{
    constructor(items)
    {
        this.items = items
    }

    findItemDetails(item_id)
    {
        this.items.forEach(element => {
            if(element.id == item_id)
            {
                return element
            }
        });
    }

    reload()
    {
        
        this.items.forEach(item => {
            console.log("deneme");
            document.getElementById('productsPage').innerHTML += 
            `<div class="col-12 mt-2">
                <div class="card">
                    <div class="row">
                        <div class="col-2">
                            <img src="https://picsum.photos/100" class="img-thumbnail rounded float-left" alt="...">
                        </div>
                        <div class="col-10">
                            <button type="button" class="btn btn-light float-right" onclick="Add(${item.id})">Sepete Ekle</button>
                            <b>${item.name}</b>
                            <p class="font-weight-light mt-2">${item.desc}</p>
                        </div>
                    </div>
                </div>   
            </div>`
        });
    }
}