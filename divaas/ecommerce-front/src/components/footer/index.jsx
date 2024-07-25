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

import payPlay from './../../assets/images/pay/play.jpg';
import payApp from './../../assets/images/pay/app.jpg';
import payPay from './../../assets/images/pay/pay.png';

function Footer() {
    return ( 
        <footer class="section-p1">
            <div class="col">
                <img class="logo" src={logo} alt=""/>
                <h4>Контакты</h4>
                <p><strong>Адресс:</strong> Алматы, Назарбаева 39</p>
                <p><strong>Номер телефона:</strong> +7-747-797-8047</p>
                <p><strong>Работаем:</strong> 10:00 - 18:00</p>
                <div class="follow">
                    <h4>Подпишись на нас:</h4>
                    <div class="icon">
                        <div className="fab fa-facebook-f"><FaFacebook/></div>
                        <div className="fab fa-twitter"><FaTwitter/></div>
                        <div className="fab fa-instagram"><FaTwitter/></div>
                        <div className="fab fa-pinterest-p"><FaPinterestP/></div>
                        <div className="fab fa-youtube"><FaYoutube/></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>Про нас</h4>
                <a href="#">Информция про нас</a>
                <a href="#">Информация про доставку</a>
                <a href="#">Политика Конфиденциальности</a>
                <a href="#">Условия & Положения</a>
                <a href="#">Свяжитесь с нами</a>
            </div>
            <div class="col install">
                <h4>Скоро...</h4>
                <p>Скачай наше приложение</p>
                <div class="row">
                    <img src={payApp} alt=""/>
                    <img src={payPlay} alt=""/>
                </div>
                <p>Защищенная Платежная Система</p>
                <img src={payPay} alt=""/>
            </div>
            <div class="copyright">
                <p>Created By Tolebi Baitassov | All Rights Reserved | &#169; 2024</p>
            </div>
        </footer>
    );
}

export default Footer;