import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';

function Contact(){
    return(
        <div className="grid wide">
            <h1 className="product_title">DỊCH VỤ KHÁCH HÀNG</h1>
            <div className="row">
                <div className="col l-6 center_1">
                    <h3>TRỰC TUYẾN</h3>
                    <p>Tham khảo về mua hàng qua mạng</p>
                    <div className="title_phone">
                        <AddIcCallIcon/>
                        <h4>Số Điện Thoại</h4>
                    </div>                 
                    <span className="hotline">+84972080403</span>
                    <div className="socaial_network">
                        <FavoriteIcon/>
                        <h4>Liên kết mạng xã hội</h4>
                    </div>  
                    <p>Facebook: MrsimpleStyle</p> 
                    <p className="ins">Instagram: @MrsimpleStyle_store</p> 
                 
                </div>
                <div className="col l-6 center_2">
                     <h3>CỬA HÀNG VÀ CÔNG TY</h3>
                     <p>Bạn hãy tham khảo về các cửa hàng của chúng tôi</p>
                     <div className="socaial_network">
                        <EmailIcon/>
                        <h4>Email</h4>
                    </div> 
                    <p>mrsimplestyle@gmail.com</p>
                    <div className="socaial_network">
                        <FavoriteIcon className="icon_heart"/>
                        <h4>Liên kết mạng xã hội</h4>
                    </div>  
                    <p>Facebook: MrsimpleStyle</p> 
                    <p className="ins">Instagram: @MrsimpleStyle_store</p> 
                </div>
            </div>
            <div className="socaial_network m-b">
                <HomeIcon className="icon_home" style={{fontSize:30}}/>
                <h2>chi nhánh công ty</h2>
            </div> 
                <div className="company">
                    <h3>MRSIMPLE CRESCENT MALL</h3>
                    <p>3F-37 Crescent Mall 101 Tôn Dật Tiên, Tân Phong, Quận 7, Thành phố Hồ Chí Minh</p>
                    <h3>MRSIMPLE HÀ NỘI</h3>
                    <p>L3-15 Vincom Phạm Ngọc Thạch, 2 Phạm Ngọc Thạch, Trung Tự, Đống Đa, Hà Nội</p>
                    <h3>MRSIMPLE VŨNG TÀU</h3>
                    <p>42 Ba Cu, Phường 1, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu</p>
                </div>
        </div>
    );
}
export default Contact;