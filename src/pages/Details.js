import { useParams } from "react-router-dom";
import {data} from "./DataAllProduct";
function Details(){
    const {id} = useParams();
    return(
        <div>
          {data.filter(person =>person.id == id).map(product => (
                <div className="grid wide">
                        <div className="details_list">
                            <div className="row">
                            <div className="col l-6 center">
                                <img src={product.img} className="details_img"></img>
                            </div>
                            <div className="col l-6">
                                <h2 className="details_title">{product.title}</h2>
                                <p className="details_price">{product.price}</p>
                                <p className="details_size">{product.size}</p>
                                <p className="details_des">{product.description}</p>
                                <button className="details_btn">THÊM VÀO GIỎ HÀNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details;