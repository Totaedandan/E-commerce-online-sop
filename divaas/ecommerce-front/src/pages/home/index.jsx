import React, { useState, useEffect } from 'react';
import './../../globalStyles.scss';

import logo from './../../assets/images/logo.png'
import { 
    FaShoppingCart,
    FaFacebook,
    FaStar,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube 
} from "react-icons/fa";

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

import payPlay from './../../assets/images/pay/play.jpg';
import payApp from './../../assets/images/pay/app.jpg';
import payPay from './../../assets/images/pay/pay.png';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Home() {

    return ( 
        <div className="home-page">
            <Header />

            <section id="hero">
                <h4>СТАНОВИТЕСЬ</h4>
                <h2>КРАСИВЕЕ И МОДНЕЕ</h2>
                <h1>ВМЕСТЕ С DIVAAAS</h1>
                <p>Еще больше товаров у нас в инстаграме!</p>
                <button>Посмотреть INSTAGRAM</button>
            </section>

            <section id="feature" class="section-p1">
                <div class="fe-box">
                    <img src={features_f1} alt=""/>
                    <h6>Бесплатный Просмотр</h6>
                </div>
                <div class="fe-box">
                    <img src={features_f2} alt=""/>
                    <h6>Онлайн Доставка</h6>
                </div>
                <div class="fe-box">
                    <img src={features_f3} alt=""/>
                    <h6>Сэкономте деньги</h6>
                </div>
                <div class="fe-box">
                    <img src={features_f4} alt=""/>
                    <h6>Скидки</h6>
                </div>
                <div class="fe-box">
                    <img src={features_f5} alt=""/>
                    <h6>Хорошая Покупка</h6>
                </div>
                <div class="fe-box">
                    <img src={features_f6} alt=""/>
                    <h6>24/7 Поддержка</h6>
                </div>
            </section>

            <section id="product1" class="section-p1">
                <h2>Наши одежды</h2>
                <p>Летняя коллекция Новый Модный Дизайн</p>
                <div class="pro-container">
                    <div class="pro">
                        <img src={products_f1} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>5400тг + вес</h4>
                            <h5>▪️ Вес: 100гр - 250тг (за вес оплачиваем по приезду товара)</h5>
                            <h5>▪️ Предоплата 100%</h5>
                            <h5>▪️ Срок ожидания 2-3 недели</h5>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
                    </div>
                    <div class="pro">
                        <img src={products_f2} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>5400тг + вес</h4>
                            <h5>▪️ Вес: 100гр - 250тг (за вес оплачиваем по приезду товара)</h5>
                            <h5>▪️ Предоплата 100%</h5>
                            <h5>▪️ Срок ожидания 2-3 недели</h5>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
                    </div>
                    <div class="pro">
                        <img src={products_f3} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
                            <h5>Джинсы в корейском стиле</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>Цена: 6200тг + вес</h4>
                            <h5>▪️ Вес: 100гр - 250тг (за вес оплачиваем по приезду товара)</h5>
                            <h5>▪️ Предоплата 100%</h5>
                            <h5>▪️ Срок ожидания 2-3 недели</h5>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
                    </div>
                    <div class="pro">
                        <img src={products_f4} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>3990тг + вес</h4>
                            <h5>▪️ Вес: 100гр - 250тг (за вес оплачиваем по приезду товара)</h5>
                            <h5>▪️ Предоплата 100%</h5>
                            <h5>▪️ Срок ожидания 2-3 недели</h5>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
                    </div>
                    <div class="pro">
                        <img src={products_f5} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>4990тг + вес</h4>
                            <h5>▪️ Вес: 100гр - 250тг (за вес оплачиваем по приезду товара)</h5>
                            <h5>▪️ Предоплата 100%</h5>
                            <h5>▪️ Срок ожидания 2-3 недели</h5>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
                    </div>
                    <div class="pro">
                        <img src={products_f6} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>3990тг + вес</h4>
                            <h5>▪️ Вес: 100гр - 250тг (за вес оплачиваем по приезду товара)</h5>
                            <h5>▪️ Предоплата 100%</h5>
                            <h5>▪️ Срок ожидания 2-3 недели</h5>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
                    </div>
                    <div class="pro">
                        <img src={products_f7} alt=""/>
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
                            <h5>▪️ Вес: 100гр - 250тг (за вес оплачиваем по приезду товара)</h5>
                            <h5>▪️ Предоплата 100%</h5>
                            <h5>▪️ Срок ожидания 2-3 недели</h5>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
                    </div>
                    <div class="pro">
                        <img src={products_f8} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                                <div className={'fas fa-star'}><FaStar /></div>
                            </div>
                            <h4>$78</h4>
                            <h5>▪️ Вес: 100гр - 250тг (за вес оплачиваем по приезду товара)</h5>
                            <h5>▪️ Предоплата 100%</h5>
                            <h5>▪️ Срок ожидания 2-3 недели</h5>
                        </div>
                        <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
                    </div>
                </div>
            </section>


            <section id="product1" class="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>
                <div class="pro-container">
                    <div class="pro">
                        <img src={products_n1} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
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
                            <span>divaas.kz</span>
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
                            <span>divaas.kz</span>
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
                            <span>divaas.kz</span>
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
                        <img src={products_n5} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
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
                        <img src={products_n6} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
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
                        <img src={products_n7} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
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
                        <img src={products_n8} alt=""/>
                        <div class="des">
                            <span>divaas.kz</span>
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


            <section id="banner3">
                <div class="banner-box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div class="banner-box">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring / Summer 2023</h3>
                </div>
                <div class="banner-box">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>
            </section>

            <Footer />
            
        </div>
    );
}

export default Home;