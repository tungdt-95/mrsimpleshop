import { useEffect, useState } from "react";
import Policy from "../components/layout/Policy";
import SliderList from "../components/layout/Slider"

function Home(){
        const [products,setProducts] = useState([]);

               useEffect(() => {
                 async function fechNewproductlist (){
                const resquesturl = "https://6093bab9a7e53a00179516cb.mockapi.io/products";
                const response = await fetch(resquesturl);
                const responseJSON = await response.json();
                
                setProducts(responseJSON); 

            }
            fechNewproductlist();
        },[]);
    return(
        <div>
            <div className="grid hide">
                <SliderList/>
            </div>
             <div className="grid wide">   
                <h1 className="product_title">SẢN PHẨM POLO MỚI</h1>
                <div className="row">                
                        {products.map((product) => {
                        return <NewProducts product={product}></NewProducts>                        
                    })}  
                    <Policy/>
                </div> 
             </div>
        </div>
    );
}
const NewProducts = (props) => {
        const { img , title , price} =  props.product;
    return(
            <div className="col l-3 c-12">
                <div className="product_list">
                    <img src={img} className="img_item" alt="productitem"></img>
                    <h2 className="item_title">{title}</h2>
                    <p className="product_price">{price}</p>
                    <div className="btn">
                        <button className="btn_item">Chọn Mua</button>
                    </div>
                </div>
            </div>
    );
}
export default Home;