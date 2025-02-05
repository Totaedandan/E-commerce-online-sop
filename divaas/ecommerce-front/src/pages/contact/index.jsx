import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import people_p1 from './../../assets/images/people/1.png'
import people_p2 from './../../assets/images/people/2.png'
import people_p3 from './../../assets/images/people/3.png'
import { FaClock, FaEnvelope, FaMap, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
    return ( 
        <div className='contact-page'>

            <Header />

            <section id="page-header" class="about-header">
                <h2>#давайте_поговорим</h2>
                <p>ОСТАВЬТЕ СООБЩЕНИЕ, нам приятно слышать от вас !</p>
            </section>

            <section id="contact-details" class="section-p1">
                <div class="details">
                    <span>СВЯЖИТЕСЬ С НАМИ</span>
                    <h2>Наш склад в городе Алматы.</h2>
                    <h3>Склад</h3>
                    <div>
                        <li>
                            <div class="fas fa-map"><FaMap /></div>
                            <p>Алматы, Назарбаева 28</p>
                        </li>
                        <li>
                            <div class="fas fa-envelope"><FaEnvelope /></div>
                            <p>divaaskz@gmail.com</p>
                        </li>
                        <li>
                            <div class="fas fa-phone-alt"><FaPhoneAlt /></div>
                            <p>+7-747-797-8047</p>
                        </li>
                        <li>
                            <div class="fas fa-clock"><FaClock /></div>
                            <p>Работаем 24/7</p>
                        </li>
                    </div>
                </div>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.48983392344!2d74.1943055256652!3d31.483156882376644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1676498542792!5m2!1sen!2s"
                        width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <section id="form-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button class="normal">Submit</button>
                </form>
                <div class="people">
                    <div>
                        <img src={people_p1} alt=""/>
                        <p><span>John Doe</span> Senior Marketing Manager<br/>Phone: +000 123 000 77 88<br/>Email: contact@example.com</p>
                    </div>
                    <div>
                        <img src={people_p2} alt=""/>
                        <p><span>William Smith</span> Senior Marketing Manager<br/>Phone: +000 123 000 77 88<br/>Email: contact@example.com</p>
                    </div>
                    <div>
                        <img src={people_p3} alt=""/>
                        <p><span>Emma Stone</span> Senior Marketing Manager<br/>Phone: +000 123 000 77 88<br/>Email: contact@example.com</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );  
}

export default Contact;