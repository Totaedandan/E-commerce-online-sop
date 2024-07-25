
import { 
    FaShoppingCart,
    FaStar,
} from "react-icons/fa";

import products_n1 from './../../assets/images/products/n1.jpg';

const ProductShort = ({
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
            <img src={data.imageUrl} alt=""/>
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
            </div>
            <a href="#"><div className={"fas fa-shopping-cart cart"}><FaShoppingCart/></div></a>
        </div>
    )
}

export default ProductShort;