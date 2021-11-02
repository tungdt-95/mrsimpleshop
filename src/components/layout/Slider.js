import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(95, 158, 160)" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(95, 158, 160)"}}
        onClick={onClick}
      />
    );
  }
function SliderList (){
    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase:"linear" ,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />    
      };
    return(
        <div className="grid wide">
            <div className="row">
                <div className="col l-12 slider">
                    <Slider {...settings}>
                        <div>
                            <img alt="ha" src="https://mrsimple.vn/images/slider/desktop1628852808.jpg" className="slider_1"></img>
                        </div>
                        <div>
                             <img alt="ha" src="https://mrsimple.vn/images/slider/desktop1628225735.jpg" className="slider_1"></img>
                        </div>  
                        <div>
                            <img alt="ha" src="https://mrsimple.vn/images/slider/desktop1628852808.jpg" className="slider_1"></img>
                        </div>
                        <div>
                             <img  alt="ha"src="https://mrsimple.vn/images/slider/desktop1628225735.jpg" className="slider_1"></img>
                        </div>  
                        
                        
                    </Slider>

                </div>
            </div>

        </div>
    )
}
export default SliderList;