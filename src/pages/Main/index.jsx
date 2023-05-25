import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import shoes from '../../data/data';
import './style.css';
import { useState } from 'react';

function Main() {

  const [products, setProducts] = useState([...shoes])

  return (
    <div className="container">
      <Header />
      <div className='container-products'>
        {products.map((product) => (
          <Product
            key={product.id}
            item={product}
          />
        ))}
      </div>
      <Footer />
      <Modal />
    </div>
  );
}

export default Main;
