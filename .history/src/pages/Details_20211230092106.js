import { useParams} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Policy from "../components/layout/Policy";
import { useState } from "react";
import { DataContext } from "../components/layout/DataProvider"
import React, { useContext } from "react";

function Details()
{

    const value = useContext(DataContext)
    const [products] = value.products
    const Addtocart = value.Addtocart


    const {id} = useParams();
    const [count,setCount] = useState(1);
    const desc = () =>{
        setCount (count - 1);
        if(count <= 1)
        {
            setCount(1);
        }
    }
    const insc = () =>{
        setCount (count + 1);
    }
    return(
        <div>
            <h1 className="product_title">CHI TIẾT SẢN PHẨM</h1>
             {products.filter(details =>details.id === id).map(product => (
                <div className="grid wide" key>
                        <div className="details_list">
                            <div className="row">
                            <div className="col l-4 center">
                                <img src={product.img} className="details_img" alt="ha"></img>
                            </div>
                            <div className="col l-4">
                                <h2 className="details_title">{product.title}</h2>
                                <p className="details_price">{product.price}Đ</p>
                                <div className="details_color">
                                    {
                                         product.color.map((color,index)=>(
                                            <button 
                                                key={index} 
                                                style={{backgroundColor:color}}>
                                            </button>
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
                                        <ArrowBackIosIcon 
                                            style={{fontSize:25}} 
                                            onClick={desc}
                                        />
                                        <span>{count}</span>
                                        <ArrowForwardIosIcon
                                            style={{fontSize:25}}
                                            onClick={insc}
                                        />
                                    </div>
                                </div>
                                <button className="details_btn" onClick={() => Addtocart(id)}>THÊM VÀO GIỎ HÀNG</button>
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