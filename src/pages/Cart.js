import DeleteIcon from '@material-ui/icons/Delete';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../components/layout/DataProvider';

function Cart() {
    const value = useContext(DataContext)
    const [cart, setcart] = value.cart

    const [total,settotal] = useState(0)

    useEffect(() =>{
      const gettotal = () => {
        const num = cart.reduce((prev,item) => {
            return prev + ( item.price * item.count )
        },0)
        settotal(num)
      } 
      gettotal()
    },[cart])
   
   


    if (cart.length === 0) {
        return <h3 className="cart_title">Chưa có sản phẩm nào được thêm vào giỏ hàng</h3>
    }

    const remove = (id) => {
        cart.forEach((item, index) => {
            if (item.id === id) {
                cart.splice(index, 1)
            }
        })
        setcart([...cart])
    }
    const reduction = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1
            }
        })
        setcart([...cart])
    }
    const increase = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.count += 1
            }
        })
        setcart([...cart])
    }


    return (
        <div className="grid wide">
            <div className="main_cart">
                <h1>Giỏ hàng của bạn</h1>
                <p>Bạn có <span>{cart.length}</span> sản phẩm trong giỏ hàng</p>
            </div>
            <div className="cart_items">
                {
                    cart.map(product => (
                        <div className="list_cart_items">
                            <div className="row">
                                <div className="col l-2 c-12">
                                    <img src={product.img} className="img_cart" alt="title"></img>
                                </div>
                                <div className="col l-4 c-12">
                                    <h4>{product.title}</h4>
                                </div>
                                <div className="col l-2 c-4">
                                    <div className="cart_btn">
                                        <span className="btn_cart" onClick={() => reduction(product.id)}>-</span>
                                        <span className="quantity_cart">{product.count}</span>
                                        <span className="btn_cart" onClick={() => increase(product.id)}>+</span>

                                    </div>
                                </div>
                                <div className="col l-2 c-4">
                                    <p className="price">{product.price}Đ</p>
                                </div>
                                <div className="col l-2 c-4">
                                    <div className="del">
                                        <DeleteIcon onClick={() => remove(product.id)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
                <div className="cart_total">
                    <h3>Tổng tiền : <span>{`${total}.000Đ`}</span></h3>
                </div>
            </div>


        </div>
    )

}
export default Cart;