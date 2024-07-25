import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import blog_b1 from './../../assets/images/blog/b1.jpg';
import blog_b2 from './../../assets/images/blog/b2.jpg';
import blog_b3 from './../../assets/images/blog/b3.jpg';
import blog_b4 from './../../assets/images/blog/b4.jpg';
import blog_b5 from './../../assets/images/blog/b5.jpg';
import blog_b6 from './../../assets/images/blog/b6.jpg';
import blog_b7 from './../../assets/images/blog/b7.jpg';

function Blog() {
    return ( 
        <div className='blog-page'>
            <Header />
            
            <section id="page-header" class="blog-header">
                <h2>#прочитай</h2>
                <p>Читайте все тематические исследования о наших продуктах!</p>
            </section>

            <section id="blog">
                <div class="blog-box">
                    <div class="blog-img">
                        <img src={blog_b1} alt=""/>
                    </div>
                    <div class="blog-details">
                        <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>13/01</h1>
                </div>
                <div class="blog-box">
                    <div class="blog-img">
                        <img src={blog_b2} alt=""/>
                    </div>
                    <div class="blog-details">
                        <h4>How to Style a Quiff</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>13/04</h1>
                </div>
                <div class="blog-box">
                    <div class="blog-img">
                        <img src={blog_b3} alt=""/>
                    </div>
                    <div class="blog-details">
                        <h4>Must-Have Skater Girl Items</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>12/01</h1>
                </div>
                <div class="blog-box">
                    <div class="blog-img">
                        <img src={blog_b4} alt=""/>
                    </div>
                    <div class="blog-details">
                        <h4>Runway-Inspired Trends</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>16/01</h1>
                </div>
                <div class="blog-box">
                    <div class="blog-img">
                        <img src={blog_b5} alt=""/>
                    </div>
                    <div class="blog-details">
                        <h4>AW20 Menswear Trends</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>10/03</h1>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Blog;