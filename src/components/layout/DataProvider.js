import React from 'react';
import { createContext, useState,useEffect } from 'react';
export const DataContext = createContext();
export const DataProvider = (props) => {

        const [products,setProducts] = useState(
            [
                {
                    id:"1",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3296/1024x1536TKOojzXOmCniQLDQyVbT7SSAYVfLQNEEC9bpe32h.jpeg",
                    title:"ÁO THUN TAY NGẮN IN CHỮ MRSIMPLE",
                    price:"394.000",
                    count:1,
                    color:["red","green","black","pink"],
                    namepro:"thun",
                    size:["S","M","L","XL","XXL"],
                    description:"T-shirt nam ngắn in nhựa logo Mr Simple màu đen trên nền vải xám , áo có bo vải đen ở tay và cổ áo làm điểm nhấn cho chiếc áo thêm đặc biệt. Áo thun form muscle fit Gen 1 ôm body tôn dáng cực chuẩn, chiếc áo này có chất vải dày dặn co giãn tốt. Có thể phối với short jean hoặc jean trơn basic."
                },
                {
                    id:"2",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3249/1024x1536gbbbBJitOLXYACC42fO8mphnzOIAHx8AWo8d6JOH.jpeg",
                    title:"ÁO THUN MÀU ĐEN MRS",
                    price:"352.000",
                    count:1,
                    color:["red","green","black","pink"],
                    namepro:"thun",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo thun chất liệu Cotton 100% vải cực mềm và co giãn, áo thun trắng sọc ngang xanh đen, xen kẽ màu trắng giúp chiếc áo trông đặc biệt hơn. Form muscle fit Gen 2 ôm body tôn dáng cực chuẩn. Áo mặc lên rất sang và giúp người mặc luôn cảm thấy tự tin vì chất vải rất xịn xò này."
                },
                {
                    id:"3",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3217/1024x1536AVhPzEw20HLjxhNjcIDZx8LRUX2v1QpFw4XNDg5Z.jpeg",
                    title:"ÁO THUN TRẮNG SỌC XANH",
                    color:["red","green","black","pink"],
                    price:"452.000",
                    count:1,
                    namepro:"thun",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo thun chất liệu Cotton 100% vải cực mềm và co giãn, áo thun trắng sọc ngang xanh đen, xen kẽ màu trắng giúp chiếc áo trông đặc biệt hơn. Form muscle fit Gen 2 ôm body tôn dáng cực chuẩn. Áo mặc lên rất sang và giúp người mặc luôn cảm thấy tự tin vì chất vải rất xịn xò này."
            
                },
                {
                    id:"4",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3228/1024x1536ytbUR8DEy8XQ7lucDhLNmhYW3xWGs3H1UY5FDMes.jpeg",
                    title:"ÁO THUN NAM IN CHỮ BABE SHARK",
                    color:["red","green","black","pink"],
                    price:"363.000",
                    count:1,
                    namepro:"thun",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo thun chất liệu Cotton 100% vải thun mềm mịn rất xịn xò, áo form Relaxed Fit mặc siêu thoải mái và năng động. Áo có in chữ HARVARD EST.1636  , với 3 màu basic : Trắng / Xanh Đen / Xanh lá cây."
                },
                {
                    id:"5",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3177/1920sameTPBTrkp4gUsYnpQ4AJwFZmuLZRi3IRCDkGHjApdu.jpeg",
                    title:"SƠ MI SỌC XANH ",
                    color:["red","green","black","pink"],
                    price:"456.000",
                    count:1,
                    namepro:"somi",
                    size:["S","M","L","XL","XXL"],
                    description:"Legendary item! Sơ mi trắng trơn. Một trong những item thời trang không thể thiếu trong tủ đồ của bất kỳ một chàng trai nào. Đơn giản trong thiết kế nhưng lại sang trọng. Tương đối dễ mặc và tất nhiên là không bao giờ gặp phải tình trạng lỗi thời. Bạn hoàn toàn có thể phối áo sơ mi nam trắng với bất kỳ một item nào khác. Được may bằng vải cotton 100% còn form slimfit ôm sát tôn lên đường nét cơ thể"
                },
                {
                    id:"6",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3204/1024x1536xqc03niKl4VFmfdc3i1BpAbt2rSF5fs8lzhN3bBr.jpeg",
                    title:"SƠ MI NAM 2 TÙI TRẮNG ĐỎ",
                    color:["red","green","black","pink"],
                    price:"650.000",
                    count:1,
                    namepro:"somi",
                    size:["S","M","L","XL","XXL"],
                    description:"Legendary item! Sơ mi trắng trơn. Một trong những item thời trang không thể thiếu trong tủ đồ của bất kỳ một chàng trai nào. Đơn giản trong thiết kế nhưng lại sang trọng. Tương đối dễ mặc và tất nhiên là không bao giờ gặp phải tình trạng lỗi thời. Bạn hoàn toàn có thể phối áo sơ mi nam trắng với bất kỳ một item nào khác. Được may bằng vải cotton 100% còn form slimfit ôm sát tôn lên đường nét cơ thể"
                },{
                    id:"7",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3352/1024x1536fMntbBoHimw0Phm1Jm09c5PS9nRMOBDi9hVczb3o.jpeg",
                    title:"SƠ MI 2 TÚI CARO NÂU KEM",
                    color:["red","green","black","pink"],
                    price:"410.000",
                    count:1,
                    namepro:"somi",
                    size:["S","M","L","XL","XXL"],
                    description:"Legendary item! Sơ mi trắng trơn. Một trong những item thời trang không thể thiếu trong tủ đồ của bất kỳ một chàng trai nào. Đơn giản trong thiết kế nhưng lại sang trọng. Tương đối dễ mặc và tất nhiên là không bao giờ gặp phải tình trạng lỗi thời. Bạn hoàn toàn có thể phối áo sơ mi nam trắng với bất kỳ một item nào khác. Được may bằng vải cotton 100% còn form slimfit ôm sát tôn lên đường nét cơ thể"
                }
                ,{
                    id:"8",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3453/1024x1536crqnBp9ZQROUY3UjXaS5o77akoHfECxCsw7gfibO.jpeg",
                    title:"SƠ MI 2 TÚI SỌC ĐEN TRẮNG",
                    color:["red","green","black","pink"],
                    price:"562.000",
                    count:1,
                    namepro:"somi",
                    size:["S","M","L","XL","XXL"],
                    description:"Legendary item! Sơ mi trắng trơn. Một trong những item thời trang không thể thiếu trong tủ đồ của bất kỳ một chàng trai nào. Đơn giản trong thiết kế nhưng lại sang trọng. Tương đối dễ mặc và tất nhiên là không bao giờ gặp phải tình trạng lỗi thời. Bạn hoàn toàn có thể phối áo sơ mi nam trắng với bất kỳ một item nào khác. Được may bằng vải cotton 100% còn form slimfit ôm sát tôn lên đường nét cơ thể"
            
                }
                ,{
                    id:"9",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3172/1024x15368DrKFbBc4taGkT3Nlv1vSPAaMrABfWw6tdUhxmoH.jpeg",
                    title:"ÁO SƠ MI NAM CASUAL NHIỀU MÀU",
                    color:["red","green","black","pink"],
                    price:"650.000",
                    count:1,
                    namepro:"somi",
                    size:["S","M","L","XL","XXL"],
                    description:"Legendary item! Sơ mi trắng trơn. Một trong những item thời trang không thể thiếu trong tủ đồ của bất kỳ một chàng trai nào. Đơn giản trong thiết kế nhưng lại sang trọng. Tương đối dễ mặc và tất nhiên là không bao giờ gặp phải tình trạng lỗi thời. Bạn hoàn toàn có thể phối áo sơ mi nam trắng với bất kỳ một item nào khác. Được may bằng vải cotton 100% còn form slimfit ôm sát tôn lên đường nét cơ thể"
            
                }
                ,{
                    id:"10",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3136/1024x1536yoBdzQBeDisLfp6mqC1ESyGDeTSqpI525QMI5MtS.jpeg",
                    title:"QUẦN JEAN DÀI NAM XANH TRƠN",
                    color:["red","green","black","pink"],
                    price:"456.000",
                    count:1,
                    namepro:"jean",
                    size:["S","M","L","XL","XXL"],
                    description:"Quần Jean Nam chất liệu Cotton pha Poly dày dặn vừa đủ đồng thời có co giãn nhẹ form short skinny ôm chân , tôn dáng người mặc. Màu xanh cơ bản có wax nhẹ ở đùi, nút inox cơ bản."
                }
                ,{
                    id:"11",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3431/1024x15364JqJxgYUfty0G47iH1FpbHAj6tVz7ZcLu8KGVfg1.jpeg",
                    title:"QUẦN JEAN SKINNY RÁCH GỐI",
                    color:["red","green","black","pink"],
                    price:"658.000",
                    count:1,
                    namepro:"jean",
                    size:["S","M","L","XL","XXL"],
                    description:"Quần jean với phom Short Skinny , chất jean dày dặn vừa phải nhưng vẫn đảm bảo độ mềm mịn và co giãn thoải mái. Quần trơn có wax nhẹ , phần túi sau được thiết kế cách điệu - lạ mắt. Có 5 size cho cậu lựa chọn từ S đến XXL ( tương đương 29 đến 33 )."
                }
                ,{
                    id:"12",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2948/1024x1536olKiYUovEc031Iyr22ihsgbCSP8PgYzbDS6OTLau.jpeg",
                    title:"QUẦN JEAN SKINNY XANH ĐEN TRƠN",
                    color:["red","green","black","pink"],
                    price:"720.000",
                    count:1,
                    namepro:"jean",
                    size:["S","M","L","XL","XXL"],
                    description:"Quần jean với phom Short Skinny , chất jean dày dặn vừa phải nhưng vẫn đảm bảo độ mềm mịn và co giãn thoải mái. Quần trơn có wax nhẹ , phần túi sau được thiết kế cách điệu - lạ mắt. Có 5 size cho cậu lựa chọn từ S đến XXL ( tương đương 29 đến 33 )."
            
                }
                ,{
                    id:"13",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2880/1024x1536iDeJLRWSZY4cPbOof07B3CWb3D0uBrqePlo3CUxb.jpeg",
                    title:"QUẦN JEAN RÁCH GỐI XANH ĐẬM",
                    color:["red","green","black","pink"],
                    price:"549.000",
                    count:1,
                    namepro:"jean",
                    size:["S","M","L","XL","XXL"],
                    description:"Quần jean với phom Short Skinny , chất jean dày dặn vừa phải nhưng vẫn đảm bảo độ mềm mịn và co giãn thoải mái. Quần trơn có wax nhẹ , phần túi sau được thiết kế cách điệu - lạ mắt. Có 5 size cho cậu lựa chọn từ S đến XXL ( tương đương 29 đến 33 )."
            
                }
                ,{
                    id:"14",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3091/1024x1536CLKblJfnmerqhtp5A11wRZDFdsH93hGNVrFPyjQG.jpeg",
                    title:"ÁO KHOÁC NAM XANH ĐẬM",
                    color:["red","green","black","pink"],
                    price:"345.000",
                    count:1,
                    namepro:"aokhoac",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo khoác dù chất liệu Cotton phối Polyester , cùng với lớp lót cotton mềm mịn vừa che nắng vừa giữ ấm tốt. Áo có bo tay và bo vạt áo, đi kèm 2 túi tiện dụng. Với 3 Tone màu : Trắng / Đen và Nâu tùy theo màu nào cậu thích , Trắng tinh sang trọng, Đen nam tính mạnh mẽ hay Nâu tinh tế tùy cậu chọn."
                }
                ,{
                    id:"15",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2329/1024x1536mcypzyh72orlNCHfJyoL6RaxPJSaqJ1qzq3yPlV1.jpeg",
                    title:"ÁO KHOÁC HODIE NAM VẢI DÙ",
                    color:["red","green","black","pink"],
                    price:"634.000",
                    count:1,
                    namepro:"aokhoac",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo khoác dù chất liệu Cotton phối Polyester , cùng với lớp lót cotton mềm mịn vừa che nắng vừa giữ ấm tốt. Áo có bo tay và bo vạt áo, đi kèm 2 túi tiện dụng. Với 3 Tone màu : Trắng / Đen và Nâu tùy theo màu nào cậu thích , Trắng tinh sang trọng, Đen nam tính mạnh mẽ hay Nâu tinh tế tùy cậu chọn."
                }
                ,{
                    id:"16",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2969/1024x1536u4cKDQfULrEK2UbT7K6oaSDCaS3dQ0wbZucbf4X2.jpeg",
                    title:"ÁO KHOÁC DÙ ĐEN TRƠN",
                    color:["red","green","black","pink"],
                    price:"555.000",
                    count:1,
                    namepro:"aokhoac",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo khoác dù chất liệu Cotton phối Polyester , cùng với lớp lót cotton mềm mịn vừa che nắng vừa giữ ấm tốt. Áo có bo tay và bo vạt áo, đi kèm 2 túi tiện dụng. Với 3 Tone màu : Trắng / Đen và Nâu tùy theo màu nào cậu thích , Trắng tinh sang trọng, Đen nam tính mạnh mẽ hay Nâu tinh tế tùy cậu chọn."
                }
                ,{
                    id:"17",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2387/1024x1536DSC08086.jpg",
                    title:"ÁO GHI LÊ PHAO CÓ NÓN NAM",
                    color:["red","green","black","pink"],
                    price:"600.000",
                    count:1,
                    namepro:"aokhoac",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo khoác dù chất liệu Cotton phối Polyester , cùng với lớp lót cotton mềm mịn vừa che nắng vừa giữ ấm tốt. Áo có bo tay và bo vạt áo, đi kèm 2 túi tiện dụng. Với 3 Tone màu : Trắng / Đen và Nâu tùy theo màu nào cậu thích , Trắng tinh sang trọng, Đen nam tính mạnh mẽ hay Nâu tinh tế tùy cậu chọn."
                }
                ,{
                    id:"18",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3304/1024x15366YR0hpY9nrrUTpIfcoyhsBubOVPy3aEm7gJX1Xh7.jpeg",
                    title:"QUẦN SHORT JEAN XANH NHẠT",
                    color:["red","green","black","pink"],
                    price:"352.000",
                    count:1,
                    namepro:"short",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo khoác dù chất liệu Cotton phối Polyester , cùng với lớp lót cotton mềm mịn vừa che nắng vừa giữ ấm tốt. Áo có bo tay và bo vạt áo, đi kèm 2 túi tiện dụng. Với 3 Tone màu : Trắng / Đen và Nâu tùy theo màu nào cậu thích , Trắng tinh sang trọng, Đen nam tính mạnh mẽ hay Nâu tinh tế tùy cậu chọn."
                }
                ,{
                    id:"19",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3068/1024x1536Q78bMKaGvfVm8aeoylMxrQL2YMEGHq3EX1ws0bXh.png",
                    title:"QUẦN SHORT KAKI ĐEN TÚI NHỎ",
                    color:["red","green","black","pink"],
                    price:"410.000",
                    count:1,
                    namepro:"short",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo khoác dù chất liệu Cotton phối Polyester , cùng với lớp lót cotton mềm mịn vừa che nắng vừa giữ ấm tốt. Áo có bo tay và bo vạt áo, đi kèm 2 túi tiện dụng. Với 3 Tone màu : Trắng / Đen và Nâu tùy theo màu nào cậu thích , Trắng tinh sang trọng, Đen nam tính mạnh mẽ hay Nâu tinh tế tùy cậu chọn."
                },{
                    id:"20",
                    img:"https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3372/1024x1536IttluSHC2cX3aXw6o2hoEObgMNBV3USuqNXGa54m.jpeg",
                    title:"QUẦN SHORT JEAN RÁCH",
                    color:["red","green","black","pink"],
                    price:"435.000",
                    count:1,
                    namepro:"short",
                    size:["S","M","L","XL","XXL"],
                    description:"Áo khoác dù chất liệu Cotton phối Polyester , cùng với lớp lót cotton mềm mịn vừa che nắng vừa giữ ấm tốt. Áo có bo tay và bo vạt áo, đi kèm 2 túi tiện dụng. Với 3 Tone màu : Trắng / Đen và Nâu tùy theo màu nào cậu thích , Trắng tinh sang trọng, Đen nam tính mạnh mẽ hay Nâu tinh tế tùy cậu chọn."          
                }
            ]
        );
        
        const [ cart, setcart ] = useState([]);

   

        const Addtocart = (id) => {
            const check = cart.every(item =>{
                return item.id !== id
            }) 
            if(check){
                const datacart = products.filter(product =>{
                    return product.id === id
                })
                setcart([...cart,...datacart])
            }
            else
            {
                alert("Sản phẩm đã được thêm vào giỏ hàng")
            }
        }
    
    
        useEffect ( () => {
            const datacart =  JSON.parse(localStorage.getItem('datacart'))
            if(datacart) setcart(datacart)
        },[])
    
    
        useEffect ( () => {
            localStorage.setItem('datacart',JSON.stringify(cart))
        },[cart])
    
        const value = {
            products:[ products,setProducts ],
            cart:[ cart, setcart ],
            Addtocart: Addtocart
        }

    return (
        <div>
             <DataContext.Provider value={value}>
                 {props.children}
            </DataContext.Provider> 
        </div>
    );
}

export default DataProvider;