import './style.css'
import CloseIcon from '../../assets/close-icon.svg'
import { handleCalculateInstallments } from '../../utils/functions';
import { useEffect, useState } from 'react';

function Modal({ open, handleClose, product }) {

    return (
        <>
            {open &&
                <div className='container-modal'>
                    <div
                        className='modal'
                    >
                        <div className='modal-body'>
                            <img
                                className='product-image'
                                src={product.image}
                                alt='Sapato'
                            />
                            <img
                                className='close'
                                src={CloseIcon}
                                alt='Ícone para Fechar'
                                onClick={handleClose}
                            />
                            <strong>{product.name}</strong>
                            <p>{product.description}</p>
                            <div className='container-buy'>
                                <button className='btn-buy'>COMPRAR</button>

                                <div className='container-prices'>
                                    <div className='content-prices'>
                                        <span >R${product.oldPrice.toFixed(2)}</span>
                                        <h2 >R${product.currentPrice.toFixed(2)}</h2>
                                    </div>
                                    <div className='container-installments'>
                                        <h4>6x de R${handleCalculateInstallments(product.currentPrice)}</h4>
                                        <span>Sem juros</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal