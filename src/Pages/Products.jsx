import {useParams,Link} from "react-router-dom"
import ProductItem from "../Componentes/UI/ProductoItem"

const DUMMY_PRODUCTS = [
    {
        id:"01",
        products:[
            { id: "001", price: 10, description: "the best beer", name: "the best", img:"bg-gray-700"},
            { id: "002", price: 9, description: "nothing better the rogue", name: "The red one", img:"bg-red-700" }
         ]
    },
    {
        id:"02",
        products:[
            { id: "003", price: 20, description: "La bière est sacrée ", name: "la sacrée", img:"bg-blue-100" }
         ]
    },
    {
        id:"03",
        products:[
            { id: "004", price: 8, description: "the big macqui", name: "red x", img:"bg-blue-500"},
            { id: "005", price: 7, description: "the one", name: "test", img:"bg-green-600"}
         ]
    }
]

const Products=()=>{
    const params= useParams();
    const brand=DUMMY_PRODUCTS.find(item=>item.id===params.id);
    if(!brand){
        return<>
            <div className="text-center">
                <p>No products found</p>
                <Link className="btn-primary" to="/">Back to home</Link>
            </div>   
            </>  
    }
    const productsList=brand.products
    return<>
        <ul>
            {productsList.map((product)=>(
                <ProductItem key={product.id} data={product}></ProductItem>
            ))}
        </ul>
    </>
}

export default Products