import React, { useEffect } from "react";
import "../pageStyles/Home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Product from "../components/Product";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from 'react-redux';
import { getProduct, removeErrors } from "../features/products/productSlice";
import { toast } from "react-toastify";

function Home() {
  const {loading,error,products,productCount}=useSelector((state)=>state.product);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProduct({keyword:""}))
  },[dispatch])
  useEffect(()=>{
    if(error){
      toast.error(error.message,{position:'top-center',autoClose:3000});
      dispatch(removeErrors())
    }
  },[dispatch,error])
  return (
    <>
 {loading?
 (<Loader/>)  
 :( <>
    <PageTitle title="Home-My Website"/>
    <Navbar/>
    <ImageSlider/>
      <div className="home-container">
        <h2 className="home-heading">Trending Now</h2>
        <div className="home-product-container">
         {products.map((product,index)=>(
          <Product product={product} key={index}/>
         )) }
        </div>
      </div>
      {/* Featured Brands */}
          <div className="brands-section">
            <div className="home-container">
              <h2 className="home-heading">Featured Brands</h2>
              <div className="brands-container">
                <div className="brands-slider">
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg" alt="Apple" />
                        <h3>Apple</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Apple</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Innovative technology that changes the world. Premium quality and exceptional design."</p>
                        <p className="brand-customers">2M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg" alt="Samsung" />
                        <h3>Samsung</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Samsung</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Leading technology with cutting-edge displays and smart features for modern life."</p>
                        <p className="brand-customers">1.8M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" alt="Sony" />
                        <h3>Sony</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Sony</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Superior audio and visual experience with world-class entertainment technology."</p>
                        <p className="brand-customers">1.5M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg" alt="Nike" />
                        <h3>Nike</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Nike</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Just Do It! Premium athletic wear that inspires performance and style."</p>
                        <p className="brand-customers">3M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" alt="Microsoft" />
                        <h3>Microsoft</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Microsoft</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Empowering productivity with innovative software and cloud solutions."</p>
                        <p className="brand-customers">2.5M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg" alt="Google" />
                        <h3>Google</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Google</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Organizing the world's information and making it universally accessible."</p>
                        <p className="brand-customers">4M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  {/* Duplicate cards for seamless loop */}
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg" alt="Apple" />
                        <h3>Apple</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Apple</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Innovative technology that changes the world. Premium quality and exceptional design."</p>
                        <p className="brand-customers">2M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg" alt="Samsung" />
                        <h3>Samsung</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Samsung</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Leading technology with cutting-edge displays and smart features for modern life."</p>
                        <p className="brand-customers">1.8M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" alt="Sony" />
                        <h3>Sony</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Sony</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Superior audio and visual experience with world-class entertainment technology."</p>
                        <p className="brand-customers">1.5M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg" alt="Nike" />
                        <h3>Nike</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Nike</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Just Do It! Premium athletic wear that inspires performance and style."</p>
                        <p className="brand-customers">3M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" alt="Microsoft" />
                        <h3>Microsoft</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Microsoft</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Empowering productivity with innovative software and cloud solutions."</p>
                        <p className="brand-customers">2.5M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <div className="brand-card">
                    <div className="brand-card-inner">
                      <div className="brand-card-front">
                        <img src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg" alt="Google" />
                        <h3>Google</h3>
                      </div>
                      <div className="brand-card-back">
                        <h3>Google</h3>
                        <div className="brand-rating">
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                          <span className="star">★</span>
                        </div>
                        <p className="brand-feedback">"Organizing the world's information and making it universally accessible."</p>
                        <p className="brand-customers">4M+ Happy Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="newsletter-section">
            <div className="home-container">
              <div className="newsletter-content">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter and get the latest deals and offers</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email address" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
      <Footer />
    </>)}
    </>
  );
}

export default Home;
