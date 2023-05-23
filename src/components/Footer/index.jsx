import Logo from '../../assets/logo.svg'
import './style.css'
import LogoFacebook from '../../assets/facebook.svg'
import LogoInstagram from '../../assets/instagram.svg'

function Footer() {
    return (
        <footer>
            <div className="left-footer">
                <div className="container-address">
                    <strong>Endereço</strong>
                    <p>Rua Cubos, 10</p>
                    <p>Jardim Academy</p>
                    <p>Salvador - Bahia - CEP 41820-021</p>
                </div>
                <div className="container-social">
                    <img src={LogoFacebook} alt="Logo Facebook" />
                    <img src={LogoInstagram} alt="Logo Instagram" />
                </div>
            </div>

            <div className='vertical-line'></div>

            <div className="right-footer">
                <img src={Logo} alt="Logo Footer" className="logo-footer" />
            </div>
        </footer>
    )
}

export default Footer