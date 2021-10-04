import Policy from "../components/layout/Policy";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function DetailsPolo() {

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
    const {id} = useParams();

    return(
        <div>
            <h1 className="product_title">CHI TIẾT SẢN PHẨM</h1>
            {products.filter( details => details.id === id).map(product => (

                <div className="grid wide">
                        <div className="details_list">
                            <div className="row">
                            <div className="col l-4 center">
                                <img src={product.img} className="details_img" alt="ha"></img>
                            </div>
                            <div className="col l-4">
                                <h2 className="details_title">{product.title}</h2>
                                <p className="details_price">{product.price}</p>               
                                <div className="quantity">
                                    <div>
                                         <p>Số lượng:</p>
                                    </div>
                                    <div className="quantity_sub">
                                        <ArrowBackIosIcon style={{fontSize:25}}/>
                                        <span>0</span>
                                        <ArrowForwardIosIcon style={{fontSize:25}}/>
                                    </div>
                                </div>
                                <button className="details_btn">THÊM VÀO GIỎ HÀNG</button>
                                <button className="details_btn">MUA NGAY</button>
                            </div>
                            <div className="col l-4">
                                <img src={product.img} className="details_img" alt="ha"></img>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Policy/>
        </div>
    )
}
export default DetailsPolo;