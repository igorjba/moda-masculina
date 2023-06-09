import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import shoes from '../../data/data';
import './style.css';
import { useState } from 'react';

function Main() {

  const [products, setProducts] = useState([...shoes])
  const [open, setOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({})

  const handleDetailProduct = (product) => {
    setOpen(true)
    setCurrentProduct(product)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="container">
      <Header />
      <div className='container-products'>
        {products.map((product) => (
          <Product
            key={product.id}
            item={product}
            handleDetailProduct={handleDetailProduct}
          />
        ))}
      </div>
      <Footer />
      <Modal
        open={open}
        handleClose={handleClose}
        product={currentProduct}
      />
    </div>
  );
}

export default Main;
