import { useEffect, useState } from "react";
import Policy from "../components/layout/Policy";
function Accessory(){
    const [accesories,setaccesories] = useState([]);

    useEffect(() => {
      async function fechAccesories (){
     const resquesturl = "https://6093bab9a7e53a00179516cb.mockapi.io/accessory";
     const response = await fetch(resquesturl);
     const responseJSON = await response.json();
     
     setaccesories(responseJSON); 

 }
 fechAccesories();
},[]);
    
    return(    
        <div className="grid wide">
               <h1 className="product_title">Phụ kiện </h1>
            <div className="row">
            {accesories.map((accessory,index) => {
                    return <NewProducts key={index} accessory={accessory}></NewProducts>
                })}  
                <Policy/> 
            </div>
        </div>
    );
}
const NewProducts = (props) => {
    const { img , title , price} =  props.accessory;
return(
        <div className="col l-3 m-6 c-12">
            <div className="accesories_list">
            <Link to={`detailspolo/${id}`}>
                
                <img src={img} className="accesoies_item" alt="productitem"></img>
                </Link>

                <h2 className="item_title">{title}</h2>
                <p className="product_price">{price}</p>
                <div className="btn_center">
                <Link to={`detailspolo/${id}`}>

                    <button className="btn_item">MUA NGAY</button>
                </Link>

                </div>
            </div>
        </div>
);
}
export default Accessory;