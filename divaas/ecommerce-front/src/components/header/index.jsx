import React, { useState, useEffect } from 'react';

import logo from './../../assets/images/logo.png'
import { useLocation } from 'react-router-dom';
import { FaOutdent, FaShoppingBag } from 'react-icons/fa';

function Header() {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [])

    return ( 
        <section id="header">
            <a href="#"><img src={logo} class="logo" alt=""/></a>
            <div>
                <ul id="navbar">
                    <li><a class={`${location.pathname === '/' ? 'active' : ''}`} href="/">Главная</a></li>
                    <li><a class={`${location.pathname === '/shop' ? 'active' : ''}`} href="/shop">Магазин</a></li>
                    <li><a class={`${location.pathname === '/blog' ? 'active' : ''}`} href="/blog">Новости</a></li>
                    <li><a class={`${location.pathname === '/about' ? 'active' : ''}`} href="/about">Про нас</a></li>
                    <li><a class={`${location.pathname === '/contact' ? 'active' : ''}`} href="/contact">Контакты</a></li>
                    <a href="#" id="close"><i class="far fa-times"></i></a>
                </ul>
            </div>
            <div id="mobile">
                <a href="/cart">
                    <div class="far fa-shopping-bag">
                        <FaShoppingBag />
                    </div>
                </a>
                <div id="bar" class="fas fa-outdent">
                    <FaOutdent />
                </div>
            </div>
        </section>
    );
}

export default Header;