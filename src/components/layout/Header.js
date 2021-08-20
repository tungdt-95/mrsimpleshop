import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
function Header(){
  
    const [menu,setmenu] = useState(false);

    return(
        <div className="grid header">
            <div className="row">
                <div className="col l-4 c-6"> 
                    <h1 className="logo">MRSIMPLE</h1>
                </div>
                <div className="menu">
                        <MenuIcon  onClick={() => setmenu(!menu)} style={{fontSize:30}}></MenuIcon>
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
                            <div  className="menuclose">
                                <CloseIcon  onClick={() => setmenu(!menu)} style={{fontSize:30}}></CloseIcon>
                            </div>                          
                        </ul>
                    </nav>
                   
                </div>
                <div className="col l-4"> 
                    <div className="center">
                        <ul>
                            <li className="cart">
                                <SearchIcon style={{marginRight: 20}} className="social"/>
                                <PeopleIcon style={{marginRight: 20}}/>
                                 <Link to="/cart">
                                    <ShoppingCartIcon/>
                                </Link> 
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>

        </div>
    );

}
export default Header;