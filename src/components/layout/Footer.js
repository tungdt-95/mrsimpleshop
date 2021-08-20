import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3 c-6">
                        <h2 className="footer_title">HƯỚNG DẪN MUA HÀNG</h2>
                        <ul>
                            <li>
                                <Link>Cách mua hàng</Link>
                            </li>
                            <li>
                                <Link>Thông tin chung</Link>
                            </li>
                            <li>
                                <Link>Giao hàng</Link>
                            </li>
                            <li>
                                <Link>Cách trả lại hàng</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-3 c-6">
                        <h2 className="footer_title">THEO DÕI CHÚNG TÔI</h2>
                        <ul>
                            <li>
                                <Link>Bản tin</Link>
                            </li>
                            <li>
                                <Link>Instagram</Link>
                            </li>
                            <li>
                                <Link>Facebook</Link>
                            </li>
                            <li>
                                <Link>Tik tok</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-3 c-6">
                        <h2 className="footer_title">CHÍNH SÁCH</h2>
                        <ul>
                            <li>
                                <Link>Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <Link>Chính sách vận chuyển</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-3 c-6">
                        <h2 className="footer_title">CÔNG TY</h2>
                        <ul>
                            <li>
                                <Link>Giới thiệu về chúng tôi</Link>
                            </li>
                            <li>
                                <Link>Cửa hàng</Link>
                            </li>
                            <li>
                                <Link>Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;