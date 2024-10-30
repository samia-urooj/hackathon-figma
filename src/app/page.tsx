"use client";
import Image from "next/image";
import Footer from "./component/footer";
import { motion } from 'framer-motion';

function AnimatedSection({children}) {
  return (
    <motion.div
      initial={
        { opacity: 0, y: 50 }
      }
      whileInView={
        { opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} >
      {children}
    </motion.div>
  );
}


export default function Home() {
  return (
    <div className="bodyCont">
      <AnimatedSection>
   <div className="heading">
          <h3>Pro.Beyond.</h3>
          <h1>IPhone 14 <b>Pro</b></h1>
          <h3>Created to change everything for the better, for everyone</h3>
          <button>Shop Now</button>
         </div>   </AnimatedSection><AnimatedSection>
         <div className="img3">
        <img src="/image/iphoneimage.png"></img></div></AnimatedSection>

 
        
        <div className="body2">   
        <img src="/image/PlayStation.png"></img>
      <div className="playStation">   <h1><b>Playstation 5</b></h1>
   <p>Incredibly powerful CPUs,GPUs and an SSD with<br></br> 
   integrated I/O will redefine your PlayStation<br></br> experience.</p></div> <div className="airpod"> <img src="/image/AirpodsMax.png"></img><div className="airpodHeading"><h3>Apple</h3><h3>Airpods</h3><h1><b>MAX</b></h1>
   <p>Computational audio.<br></br>
    Listen, it's powerful.</p></div></div> 
   

       <div className="appleVision">
        <img src="/image/VisionPro.png"></img>
        <div className="appleVisionHeading"><h1>Apple </h1><h1>Vision <b>Pro</b></h1>
  <p>An immersive way to <br></br>experience <br></br>entertainment.</p></div></div>
        </div>


        <div className="macbookDiv"> <div className="macHeading"> <h4>Mackbook</h4>
        <h1><b>Air</b></h1>
        <p>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p><button>Shop now</button>
        </div>
        <img src="/image/MacBookAir.png"></img>
       </div>


       <div className="browseCont">
        <pre><h3><b>Browse by Category                                                                                                                   </b></h3></pre>
        <div className="browseImg1"><img src="/image/Arrow.png"></img></div><div className="browseImg2"><img src="/image/ArrowRight.png"></img></div><br></br>

<div className="browseProduct"> 
        <div className="product"><img src="https://www.freepnglogos.com/uploads/mobile-phone-logo-icon-32.png"></img><h4>Phones</h4></div>
       
        <div className="product3"><img src="https://static-00.iconduck.com/assets.00/camera-icon-512x417-vgmhgbfy.png" ></img><h4>Cameras</h4></div>
        <div className="product4"><img src="https://cdn-icons-png.flaticon.com/512/502/502690.png"></img><h4>Headphones</h4></div>
        <div className="product5"><img src="https://www.iconpacks.net/icons/1/free-computer-icon-956-thumb.png"></img><h4>Computers</h4></div>
        <div className="product6"><img src="https://www.freeiconspng.com/thumbs/game-icon-png/games-icons-free-icons-in-token-dark-2.png"></img><h4>Gaming</h4></div>
        </div>
       </div>

       <div className="list"><div className="listHeading"><h3><u>New Arrival</u></h3>   <h3>Best Seller</h3> <h3>Feature Products</h3>   </div>
        
        <div className="listProduct">
        <div className="listPro"><img src="/image/Like.png"></img>
        <img src="/image/Iphone14pro.png" ></img><h4>Apple Iphone14 Pro Max<br></br> 128GB Deep Purple</h4><h1><b>900$</b></h1><button>Buy Now</button></div>
        <div className="listPro"><img src="/image/Like.png"></img><img src="/image/BlackMagicCamera.png"></img><h4>Blackmagic Pocket Cinema<br></br> Camera 6k</h4><h1><b>2535$</b></h1><button>Buy Now</button></div>
        <div className="listPro"><img src="/image/Like.png"></img><img src="/image/applewatch9.png"></img><h4>Apple Watch Series 9 GPS<br></br> 41mm Straight Aluminium</h4><h1><b>399$</b></h1><button>Buy Now</button></div>
        <div className="listPro"><img src="/image/Like.png"></img><img src="/image/airpodsmaxm.png"></img><h4>AirPods Max Silver<br></br> Straight Aluminium</h4><h1><b>549$</b></h1><button>Buy Now</button></div></div>

        <div className="listProduct2">
        <div className="listPro"><img src="/image/Like.png"></img><img src="/image/GalaxyWatch.png"></img><h4>Samsung Galaxy Watch6<br></br> Classic 47mm Black</h4><h1><b>369$</b></h1><button>Buy Now</button></div>
        <div className="listPro"><img src="/image/Like.png"></img><img src="/image/ZFold.png"></img><h4>Galaxy Zfold5 Unlocked |<br></br>256GB | Phantom Black</h4><h1><b>1799$</b></h1><button>Buy Now</button></div>
        <div className="listPro"><img src="/image/Like.png"></img><img src="/image/GalaxyBuds.png"></img><h4>Galaxy Buds FE<br></br>Graphite</h4><h1><b>99.99$</b></h1><button>Buy Now</button></div>
        <div className="listPro"><img src="/image/Like.png"></img><img src="/image/AppleIPad.png"></img><h4>Apple iPad 9 10.2 g4GB Wi-Fi<br></br>Silver MK2L3 2021</h4><h1><b>900$</b></h1><button>Buy Now</button></div></div>
       </div>
   



   <div className="popularPro">
    <div className="popularPro1"><img src="/image/PopularProducts.png"></img><h1>Popular Products</h1><p>iPad combines a magnificient 10.2-inch<br></br> Retina display, incredible performance,<br></br> multitasking and ease of use.</p><button>Shop Now</button></div>
    <div className="popularPro2"><img src="/image/ipadpro.png"></img><h1>Ipad Pro</h1><p>iPad combines a magnificient 10.2-inch<br></br> Retina display, incredible performance,<br></br> multitasking and ease of use.</p><button>Shop Now</button></div>
    <div className="popularPro3"><img src="/image/samsunggalaxy.png"></img><h1>Samsung Galaxy</h1><p>iPad combines a magnificient 10.2-inch<br></br> Retina display, incredible performance,<br></br> multitasking and ease of use.</p><button>Shop Now</button></div>
    <div className="popularPro4"><img src="/image/macbookpro.png"></img><h1>Macbook Pro</h1><p>iPad combines a magnificient 10.2-inch<br></br> Retina display, incredible performance,<br></br> multitasking and ease of use.</p><button>Shop Now</button></div>
   </div>


   <div className="discount">
     <h2><b>Discounts up to-50%</b></h2>
    <div className="discountProduct">
    <div className="discountDiv"><img src="/image/Like.png"></img><img src="/image/goldeniphone.png"></img><h4>Apple iPhone 14 Pro 512GB<br></br>Gold (MQ233)</h4><h1><b>1437$</b></h1><button>Buy Now</button></div>
    <div className="discountDiv"><img src="/image/Like.png"></img><img src="/image/airpodsmaxm.png"></img><h4>AirPods Max Silver<br></br> Straight Aluminium</h4><h1><b>549$</b></h1><button>Buy Now</button></div>
    <div className="discountDiv"><img src="/image/Like.png"></img><img src="/image/applewatch9.png"></img><h4>Apple Watch Series 9 GPS<br></br> 41mm Straight Aluminium</h4><h1><b>399$</b></h1><button>Buy Now</button></div>
    <div className="discountDiv"><img src="/image/Like.png"></img><img src="/image/spacegrayiphone.png"></img><h4>Apple iPhone 14 Pro 1TB Gold (MQ2V3) </h4><h1><b>1499$</b></h1><button>Buy Now</button></div></div>
   </div>



   <div className="summerSale"><span className="image-text"><h1>Big Summer <b>Sale</b></h1><p>Commodo fames vitae vitae leomauris in. Eu consequet.</p><button>Shop Now</button></span><img src="/image/Banner2.png"></img>
  </div>
  <Footer/>
    </div>


  ); 
 }
