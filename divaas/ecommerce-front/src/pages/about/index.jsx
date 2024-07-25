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

import about_a1 from './../../assets/images/about/a1.png';
import about_a2 from './../../assets/images/about/a2.jpg';
import about_a3 from './../../assets/images/about/a3.png';
import about_a4 from './../../assets/images/about/a4.png';
import about_a5 from './../../assets/images/about/a5.jpg';
import about_a6 from './../../assets/images/about/a6.jpg';
import about_video from './../../assets/images/about/1.mp4'

function About() {
    return ( 
        <div className='about-page'>
            <Header />

            <section id="page-header" class="about-header">
                <h2>#УзнайПроНас</h2>
                <p>Lorem ipsusm dolor sit amet, consectelur</p>
            </section>

            <section id="about-head" class="section-p1">
                <img src={about_a6} alt=""/>
                <div>
                    <h2>Что такое Divaaas.kz ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis autterirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                    <abbr title="">Create stunning images with as much or as little control as fa-you
                        like thanks to a choice of Basic and Creative modes.
                    </abbr>
                    <br></br>
                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images
                        with as much or as little control as you like thanks to a choice of Basic and Creative modes.
                    </marquee>
                </div>
            </section>

            <section id="about-app" class="section-p1">
                <h1>Ждите скоро <a href='#'>Приложение</a></h1>
                <div class="video">
                    <video autoplay muted loop src={about_video}></video>
                </div>
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

            <Footer />
        </div>
    );
}

export default About;