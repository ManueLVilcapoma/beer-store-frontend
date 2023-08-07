const ProductItem=(props)=>{
    const {img,name,description,price}=props.data
    return <li className="flex justify-between border-b border-secondary my-2">
        <div className="flex">
            <div className={`w-14 h-14 rounded-full shadow-lg ${img}`}></div> 
        <div className="ml-2">
        <h3 className="text-x1 font-bold">{name}</h3>
           <div className="font-Light">{description}</div>
           <p className="font-semibold text-lg text-primary">$ {price}</p>
        </div>
      
            </div>
            <div>
           <form className="text-right">
            <div className="mb-2">
                <label htmlFor="amount" className="block uppercase text-gray-500 text-xs font-bold mb-2 tracking-wide">Amount</label>
                <input type="number" id="Amount" className="w-12 border-gray-500 pl-1"></input>
                </div>
                <button className="bg-primary px-2 py-1 text-gray-100 hover:bg-secondary">add</button>
           </form>
           </div>
    </li>
}

export default ProductItem