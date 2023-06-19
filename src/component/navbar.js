import logo from '../Logo .svg';
import basket from '../basket .svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (

        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className='Nav'>
                <li><Link to='/'>Home</Link></li>
                <li><a href="/menu">Menu</a></li>
                <li><Link to='/reservations'>Reservations</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <button>Order</button>
                <img src={basket} className="basket" alt="basket" />
            </ul>

        </header>

    );
}

export default Navbar;