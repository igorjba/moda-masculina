import Header from '../../components/Header';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import './style.css';

function Main() {
  return (
    <div className="container">
      <Header />
      <div>
        <Products />
      </div>
      <Footer />
      <Modal />
    </div>
  );
}

export default Main;
