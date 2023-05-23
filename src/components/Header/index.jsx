import Logo from '../../assets/logo.svg'
import './style.css'

function Header() {
    return (
        <header>
            <h1>MODA MASCULINA</h1>
            <h2> SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
            <img
                className='logo'
                src={Logo}
                alt="Logo"
            />
        </header>
    )
}

export default Header