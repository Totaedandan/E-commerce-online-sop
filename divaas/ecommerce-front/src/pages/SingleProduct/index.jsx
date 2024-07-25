import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';

import products_f1 from './../../assets/images/products/f1.JPG';
import products_f2 from './../../assets/images/products/f2.JPG';
import products_f3 from './../../assets/images/products/f3.JPG';
import products_f4 from './../../assets/images/products/f4.JPG';
import products_f5 from './../../assets/images/products/f5.JPG';
import products_f6 from './../../assets/images/products/f6.JPG';
import products_f7 from './../../assets/images/products/f7.jpg';
import products_f8 from './../../assets/images/products/f8.jpg';

import products_n1 from './../../assets/images/products/n1.jpg';
import products_n2 from './../../assets/images/products/n2.jpg';
import products_n3 from './../../assets/images/products/n3.jpg';
import products_n4 from './../../assets/images/products/n4.jpg';
import products_n5 from './../../assets/images/products/n5.jpg';
import products_n6 from './../../assets/images/products/n6.jpg';
import products_n7 from './../../assets/images/products/n7.jpg';
import products_n8 from './../../assets/images/products/n8.jpg';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

function SingleProduct() {
    const {id} = useParams();

    useEffect(() => {

        var mainImg = document.getElementById("MainImg");
        var smallImg = document.getElementsByClassName("small-img");
        smallImg[0].onclick = function() {
            mainImg.src = smallImg[0].src;
        }
        smallImg[1].onclick = function () {
            mainImg.src = smallImg[1].src;
        }
        smallImg[2].onclick = function () {
            mainImg.src = smallImg[2].src;
        }
        smallImg[3].onclick = function () {
            mainImg.src = smallImg[3].src;
        }

    }, [])

    return ( 
        <div className='product-page'>

            <Header />

            <section id="productdetails" class="section-p1">
                <div class="single-pro-image">
                    <img src={products_f1} width="100%" id="MainImg" alt=""/>
                    <div class="small-image-group">
                        <div class="small-img-col">
                            <img src={products_f1} width="100%" class="small-img" alt=""/>
                        </div>
                        <div class="small-img-col">
                            <img src={products_f2} width="100%" class="small-img" alt=""/>
                        </div>
                        <div class="small-img-col">
                            <img src={products_f3} width="100%" class="small-img" alt=""/>
                        </div>
                        <div class="small-img-col">
                            <img src={products_f4} width="100%" class="small-img" alt=""/>
                        </div>
                    </div>
                </div>

                <div class="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T Shirt</h4>
                    <h2>$139.00</h2>
                    <select>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                    <input type="number" value="1"/>
                    <button class="normal">Add to Cart</button>
                    <h4>Product Details</h4>
                    <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric
                        constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort
                        with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range
                        of colors, it offers it all in the ultimate head-turning package.
                    </span>
                </div>
            </section>

            <section id="product1" class="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div class="pro-container">
                    <div class="pro">
                        <img src={products_n1} alt=""/>
                        <div class="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>

                    </div>
                    <div class="pro">
                        <img src={products_n2} alt=""/>
                        <div class="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>

                    </div>
                    <div class="pro">
                        <img src={products_n3} alt=""/>
                        <div class="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>

                    </div>
                    <div class="pro">
                        <img src={products_n4} alt=""/>
                        <div class="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>

                    </div>
                </div>
            </section>


            <Footer />

            
        </div>
    );
}

export default SingleProduct;