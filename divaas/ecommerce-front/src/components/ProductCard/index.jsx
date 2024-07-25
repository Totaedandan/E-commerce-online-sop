
import { 
    FaShoppingCart,
    FaStar,
} from "react-icons/fa";

import products_f8 from './../../assets/images/products/f8.jpg';


const Product = ({
    data
}) => {
    const getPrice = () => {
        let res = data.price;

        res += (data.priceIn === 'KZT' ? 'тг' : '$');

        res += (data.priceAndWeight ? ' + вес' : '');

        return res;
    }

    return (
        <div class="pro">
            <img src={products_f8} alt=""/>
            <div class="des">
                <span>{data.brend}</span>
                <h5>{data.name}</h5>
                <div class="star">
                    {
                        [1, 2, 3, 4, 5].map(item => {
                            if (item <= data.stars) 
                                return <div key={item} className={'fas fa-star'}><FaStar /></div>
                            else 
                                return null    
                        })
                    }
                    
                </div>
                <h4>{getPrice()}</h4>

                {
                    data.list.map((item, index) => {
                        return <h5 key={index}>▪️ {item}</h5>
                    })
                }
            </div>
            <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
        </div>
    )
}

export default Product;