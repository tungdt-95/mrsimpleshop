import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
function Cart()
{

    const [count,setcount] = useState(0);

   const handleclick = () =>{
        setcount (count + 1) ;
    }

    const handleclickre = () =>{
        setcount (count - 1) ;
    }
    return(
        <div className="grid wide">
           <div className="main_cart">
                <h1>Giỏ hàng của bạn</h1>
                <p>Bạn có <span>7</span> sản phẩm trong giỏ hàng</p>
           </div>
           <div className="cart_items">
               <div className="row list_cart_items">
                   <div className="col l-2">
                   </div>
                   <div className="col l-2">
                        <h4>Polo</h4>
                   </div>
                   <div className="col l-2">
                       <div className="cart_btn">
                            <RemoveIcon onClick={handleclickre}/>
                            <button className="btn_sum">{count}</button>
                            <AddIcon onClick={handleclick}/>
                       </div>
                   </div>
                   <div className="col l-2 price">
                       <p>400.999Đ</p>
                   </div>
                   <div className="col l-2">
                      <div className="del">
                        <DeleteIcon/>
                      </div>
                   </div>
               </div>   
               <div className="cart_total">
                   <h3>Tổng tiền : <span> 500.000Đ</span></h3>
                </div>        
           </div>
        </div>
    )

}
export  default Cart;