import { useParams } from "react-router-dom";
import {data} from "./DataAllProduct";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Policy from "../components/layout/Policy";
function Details()
{
    const {id} = useParams();

    return(
        <div>
            <h1 className="product_title">CHI TIẾT SẢN PHẨM</h1>
             {data.filter(details =>details.id === id).map(product => (
                <div className="grid wide">
                        <div className="details_list">
                            <div className="row">
                            <div className="col l-4 center">
                                <img src={product.img} className="details_img" alt="ha"></img>
                            </div>
                            <div className="col l-4">
                                <h2 className="details_title">{product.title}</h2>
                                <p className="details_price">{product.price}</p>
                                <div className="details_color">
                                    {
                                         product.color.map((color,index)=>(
                                            <button key={index} style={{backgroundColor:color}}></button>
                                        ))
                                    }
                                </div>
                                <p className="details_size">
                                    {
                                        product.size.map((size,index)=>(
                                            <button key={index}>{size}</button>
                                        ))
                                    }
                                </p>
                                <p className="details_des">{product.description}</p>
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

export default Details;