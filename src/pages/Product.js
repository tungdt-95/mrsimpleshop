import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Policy from "../components/layout/Policy"
import {data} from "../pages/DataAllProduct"

function Product(){

    return(
        <div className="grid wide">
            <div className="row m-l"> 
                <div className="col l-2 sidebar"> 
                    <h4>Danh Mục Sản Phẩm</h4>
                    <div className="checklist">
                        <input type="checkbox"></input>
                        <label>Áo Thun</label>             
                    </div>
                    <div className="checklist">
                    <input type="checkbox"></input>
                        <label>Áo Khoác</label>  
                    </div>
                    <div className="checklist">
                    <input type="checkbox"></input>
                        <label>Áo Sơmi</label>  
                    </div>
                    <div className="checklist">
                    <input type="checkbox"></input>
                        <label>Quần Jean</label>  
                    </div>
                    <div className="checklist">
                    <input type="checkbox"></input>
                        <label>Quần Short</label>  
                    </div>   
                    <h4>Size</h4>     
                    <div className="checklist">
                        <input type="checkbox"></input>
                        <label>S</label>             
                    </div>
                    <div className="checklist">
                    <input type="checkbox"></input>
                        <label>M</label>  
                    </div>
                    <div className="checklist">
                    <input type="checkbox"></input>
                        <label>L</label>  
                    </div>       
                    <div className="checklist">
                    <input type="checkbox"></input>
                        <label>XL</label>  
                    </div>     
                </div>
                <div className="col l-10"> 
                <h1 className="product_title">TẤT CẢ SẢN PHẨM</h1>
                   <div className="row">
                   {data.map((product,index) => {
                        return <ProductAll key={index} product={product} ></ProductAll>                     
                    })}                     
                   </div>
                </div>
                <Policy/>
            </div>          
        </div>
    );
}
const ProductAll = (props) => {

    const [products,setProducts] = useState(data)

    const [cart,setCart] = useState([])

    useEffect ( () => {
        const datacart =  JSON.parse(localStorage.getItem('datacart'))
        if(datacart) setCart(datacart)
    },[])

    useEffect ( () => {
        localStorage.setItem('datacart',JSON.stringify(cart))
    },[cart])
    
    const value = {
        products:[products,setProducts],
        cart:[cart,setCart]
    }
    // console.log(value);

    const Addtocart = (id) => {
        const check = cart.every(item =>{
            return item.id !== id
        }) 
        if(check){
            const datacart = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart, ...datacart])
        }
        else
        {
            alert("Sản phẩm đã được thêm vào giỏ hàng")
        }
    }

    const {id , img , title , price} =  props.product;
return(
        <div className="col l-3 m-6 c-12">
            <div className="product_list" key={id}>
                <Link to={`details/${id}`}>
                    <img src={img} className="img_item" alt="productitem"></img>
                </Link>

                <h2 className="item_title_all" title={title}>
                   <Link to={`/details/${id}`}>{title}</Link>
                </h2>
                <p className="product_price">{price}</p>
                <div className="btn">
                    <button className="btn_item" onClick={() =>Addtocart(id)}>MUA NGAY</button>
                </div>
            </div>
        </div>
);
}
export default Product;