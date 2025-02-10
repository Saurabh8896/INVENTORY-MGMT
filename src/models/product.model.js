export default class ProductModel{

    constructor(_id,_name,_desc,_price,_imageUrl){
        this.id = _id
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.imageUrl = _imageUrl
    }

        static get(){
       return products
        }

        static delete(id){
            const index = products.findIndex(p=>p.id == id)

            products.splice(index,1)
        }

        static update(productobj){
           const index =  products.findIndex((p)=>p.id ==productobj.id);
           console.log(index)
            products[index] = productobj
        }

        static add(name,desc,price,imageUrl){
            let newproduct = new ProductModel(
                products.length+1,
                name,
                desc,
                price,
                imageUrl
            )

            products.push(newproduct)
        }

        static getById(id){
           return products.find((p)=> p.id==id);
        }
}


var products = [
    new ProductModel(
        1,
        "Wireless Earbuds",
        "High-quality sound with noise cancellation.",
        59.99,
        "https://images.pexels.com/photos/7156882/pexels-photo-7156882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ),
    new ProductModel(
        2,
        "Smartwatch",
        "A stylish smartwatch with fitness tracking features.",
        129.99,
        "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ),
    new ProductModel(
        3,
        "Gaming Mouse",
        "Ergonomic gaming mouse with customizable RGB lighting.",
        39.99,
        "https://images.pexels.com/photos/6829331/pexels-photo-6829331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ),
    new ProductModel(
        4,
        "Bluetooth Speaker",
        "Portable Bluetooth speaker with deep bass.",
        89.99,
        "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ),
    new ProductModel(
        5,
        "4K Monitor",
        "Ultra HD 4K monitor with vibrant colors and sharp detail.",
        399.99,
        "https://images.pexels.com/photos/1576910/pexels-photo-1576910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    )
];


