import './style.css'
import { handleCalculateInstallments } from '../../utils/functions';

function Product({ item }) {
    return (
        <div className='container-product'>
            <img src={item.image} alt='Product' />
            <span>{item.name}</span>
            <div className='container-prices'>
                <span>R${item.oldPrice.toFixed(2)}</span>
                <h2>R${item.currentPrice.toFixed(2)}</h2>
            </div>
            <div className='container-installments'>
                <h4>6x de R${handleCalculateInstallments(item.currentPrice)}</h4>
                <span>Sem juros</span>
            </div>
        </div>
    )
}

export default Product