import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import features_f1 from './../../assets/images/features/f1.png';
import features_f2 from './../../assets/images/features/f2.png';
import features_f3 from './../../assets/images/features/f3.png';
import features_f4 from './../../assets/images/features/f4.png';
import features_f5 from './../../assets/images/features/f5.png';
import features_f6 from './../../assets/images/features/f6.png';

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
import { FaTimesCircle } from 'react-icons/fa';

function Cart() {
    return ( 
        <div className='cart-page'>

            <Header />

            <section id="page-header" class="about-header">
                <h2>#cart</h2>
                <p>Add your coupon code & SAVE upto 70%!</p>
            </section>

            <section id="cart" class="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="#">
                                    <div class="fas fa-times-circle" style={{color:'black'}}>
                                        <FaTimesCircle />
                                    </div>
                                </a>
                            </td>
                            <td><img src={products_f1} alt=""/></td>
                            <td>Cartoon Astronaut T-Shirt</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1"/></td>
                            <td>$118.19</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">
                                    <div class="fas fa-times-circle" style={{color:'black'}}>
                                        <FaTimesCircle />
                                    </div>
                                </a>
                            </td>
                            <td><img src={products_f2} alt=""/></td>
                            <td>Cartoon Astronaut T-Shirt</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1"/></td>
                            <td>$118.19</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#">
                                    <div class="fas fa-times-circle" style={{color:'black'}}>
                                        <FaTimesCircle />
                                    </div>
                                </a>
                            </td>
                            <td><img src={products_f3} alt=""/></td>
                            <td>Cartoon Astronaut T-Shirt</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1"/></td>
                            <td>$118.19</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="cart-add" class="section-p1">
                <div class="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon"/>
                        <button class="normal">Apply</button>
                    </div>
                </div>
                <div class="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$ 335</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$ 335</strong></td>
                        </tr>
                    </table>
                    <button class="normal">Proceed to checkout</button>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Cart;