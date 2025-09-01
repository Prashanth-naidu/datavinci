import { useEffect, useState } from 'react';
import Slider from "react-slick";

import "./index.css"


const Samples = () =>{
    const [settings, setSettings] = useState ({dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // show 3 images at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 1 } },
          { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]});
        const [images, setImages] = useState([
        "https://i.ibb.co/SwJByCJX/58ba0e08b79f094a810ba8be738fe894f88476a2.png",
        "https://i.ibb.co/Gf20xZ9h/5083dbf10b1310f93fb627c024ace1751e4e1dff.png",
        "https://i.ibb.co/wNTZv5jr/89125da6a431c8638008df0699a0659969008765.jpg",
        "https://i.ibb.co/htb0C0k/999979079a923079d63d37a1077ca3eeb88fd930.png",
        "https://i.ibb.co/0pDX97DR/cec78d557ced4a60a13cf1970145ab31c50a91f5.png",
        "https://i.ibb.co/gLFqs45B/d625e2acb74e9990ead5626314b86c7ace643f33.png",
        "https://i.ibb.co/mCdXcFt5/fa92b02e035d7f44a3b6c424e8d30e41f82a30ce.png",
        "https://i.ibb.co/NBDZk1f/fe5dbfcfe027ae1e7e36e7d174edd37c3ca0b9d0.png",
      ]);
    
      return(
         <div>
            <div style={{ width: "90%", margin: "auto", padding: "20px" }} className='sample_mobile'>
            <Slider {...settings}>
                {images.map((url, index) => (
                <div key={index}>
                    <img
                    src={url}
                    alt={`slide-${index}`}
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                    />
                </div>
                ))}
            </Slider>
            </div>
            <div className='sample_lap'>
                <img src="https://i.ibb.co/SwJByCJX/58ba0e08b79f094a810ba8be738fe894f88476a2.png" alt="img" style={{marginBottom: "8px"}}/>
                <div>
                    <img src="https://i.ibb.co/Gf20xZ9h/5083dbf10b1310f93fb627c024ace1751e4e1dff.png" alt="img" style={{ width: "250px", height: "200px", marginLeft:"5px" }}/>
                    <img src="https://i.ibb.co/wNTZv5jr/89125da6a431c8638008df0699a0659969008765.jpg" alt="img" style={{ width: "250px", height: "200px", marginLeft:"5px"}}/>
                    <img src="https://i.ibb.co/htb0C0k/999979079a923079d63d37a1077ca3eeb88fd930.png" alt="img" style={{ width: "250px", height: "200px", marginLeft:"5px"}}/>
                    <img src="https://i.ibb.co/0pDX97DR/cec78d557ced4a60a13cf1970145ab31c50a91f5.png" alt="img" style={{ width: "250px", height: "200px", marginLeft:"5px"}}/>
                    <img src="https://i.ibb.co/gLFqs45B/d625e2acb74e9990ead5626314b86c7ace643f33.png" alt="img" style={{ width: "250px", height: "200px", marginLeft:"5px"}}/>
                    <img src="https://i.ibb.co/mCdXcFt5/fa92b02e035d7f44a3b6c424e8d30e41f82a30ce.png" alt="img" style={{ width: "250px",height: '200px', marginLeft:"5px"}}/>
                    <img src="https://i.ibb.co/NBDZk1f/fe5dbfcfe027ae1e7e36e7d174edd37c3ca0b9d0.png" alt="img" style={{ width: "250px", height: "200px", marginLeft:"5px"}}/>
                </div>
            </div>
        </div>
      )
}

export default Samples