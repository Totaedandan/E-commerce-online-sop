import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import logo from './../../assets/images/logo.png'
import { 
    FaShoppingCart,
    FaFacebook,
    FaStar,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube, 
    FaLongArrowAltRight
} from "react-icons/fa";

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
import ProductShort from '../../components/ProductCard_short';
import axios from 'axios';

function Shop() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const  fetchData = async () => {
            await axios.get('http://localhost:3001/products')
                .then((response) => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                })

            
        }

        fetchData();
    }, [])

    return ( 
        <div className='shop-page'>

            <Header />

            <section id="page-header">
                <h2>#stayhome</h2>
                <p>Экономьте больше с купонами и скидками до 70%!</p>
            </section>

            <section id="product1" class="section-p1">
                <div class="pro-container">
                    {
                        products ? 
                            products
                                .map((product, index) => {
                                    return <ProductShort data={product} key={index} />
                                }) 
                            : null
                    }
                </div>
            </section>

            <section id="pagination" class="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">
                    <i class="fas fa-long-arrow-alt-right">
                        <FaLongArrowAltRight />
                    </i>
                </a>
            </section>

            <Footer />
        </div>
    );
}

export default Shop;