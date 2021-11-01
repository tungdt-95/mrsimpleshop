import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import React, { useContext } from "react";
import { DataContext } from "./DataProvider"
function Header() {
    const value = useContext(DataContext)
    const [cart] = value.cart

    const [menu, setmenu] = useState(false);

    const [header, setheader] = useState(false);

    const changeheader = () => {
        if (window.scrollY >= 50) {
            setheader(true);
        } else {
            setheader(false);
        }
    }
    window.addEventListener('scroll', changeheader);

    return (
        <header className={header ? "header active" : "header"}>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-4 c-6">
                        <Link to="/">
                            <h1 className="logo">MRSIMPLE</h1>
                        </Link>
                    </div>
                    <div className="menu">
                        <MenuIcon onClick={() => setmenu(!menu)} style={{ fontSize: 30 }}></MenuIcon>
                    </div>
                    <div className="col l-4">
                        <nav className={menu ? "active" : ''}>
                            <ul>
                                <li>
                                    <Link to="/">TRANG CHỦ</Link>
                                </li>
                                <li>
                                    <Link to="/product">SẢN PHẨM</Link>
                                </li>
                                <li>
                                    <Link to="/accesory">PHỤ KIỆN</Link>
                                </li>
                                <li>
                                    <Link to="/contact">LIÊN HỆ</Link>
                                </li>
                                <div className="menuclose">
                                    <CloseIcon onClick={() => setmenu(!menu)} style={{ fontSize: 30 }}></CloseIcon>
                                </div>
                            </ul>
                        </nav>

                    </div>
                    <div className="col l-4">
                        <div className="center_cart cart_icon">
                            <span>{cart.length}</span>
                            <Link to="/cart" className="cart">
                                <ShoppingCartIcon/>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </header>

    );

}
export default Header;