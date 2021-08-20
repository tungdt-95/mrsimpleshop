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
                   {data.map((product) => {
                        return <ProductAll key={product.id} product={product} ></ProductAll>
                        
                    })}  
                   </div>
                </div>
                <Policy/>
            </div>          
        </div>
    );
}
const ProductAll = (props) => {
    const Addtocart = () => {
        console.log("hello");
        
    }

    const { img , title , price} =  props.product;
return(
        <div className="col l-3 m-6 c-12 product_list">
            <img src={img} className="img_item" alt="productitem"></img>
            <h2 className="item_title_all">{title}</h2>
            <p className="product_price">{price}</p>
            <div className="btn">
                <button className="btn_item" onClick={Addtocart}>Chọn Mua</button>
            </div>
        </div>
);
}
export default Product;