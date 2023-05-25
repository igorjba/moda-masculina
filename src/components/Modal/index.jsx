import './style.css'
import Shoes from '../../assets/shoes/shoe1.jpg'
import CloseIcon from '../../assets/close-icon.svg'

function Modal() {
    return (
        <div className='container-modal'>
            <div className='modal'>
                <div className='modal-body'>
                    <img
                        className='product-image'
                        src={Shoes}
                        alt='Sapato'
                    />
                    <img
                        className='close'
                        src={CloseIcon}
                        alt='Ícone para Fechar'
                    />
                    <strong>Sapato masculino - Darby - Tabaco</strong>
                    <p>description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1</p>
                    <div className='container-buy'>
                        <button className='btn-buy'>COMPRAR</button>

                        <div className='container-prices'>
                            <div className='content-prices'>
                                <span >R$329,90</span>
                                <h2 >R$229,90</h2>
                            </div>
                            <div className='container-installments'>
                                <h4>6x de R$38,32</h4>
                                <span>Sem juros</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal