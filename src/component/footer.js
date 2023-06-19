import image from '../images/restaurant.jpg';
const Footer = () => {
    return (<footer className="footer">
        <div className='footer-content'>
            <img src={image} alt='' />
            <div>
                <h4>Little Lemon</h4>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='contact'>
                <h4>Contact</h4>
                <span>Little Lemon</span>
                <br></br>
                <span>331 E Chicago LaSalle Street Chicago,</span>
                <br></br>
                <span>Illinois 60602</span>
                <br></br>
                <span>USA</span>
                <br></br>
                <span>+ 55 11 9999 - 9999</span>
                <br></br>
                <span>contact @littlelemon.com</span>
                {/* <ul>
                <li>Little Lemon </li>
                <li>331 E Chicago</li>
                <li>LaSalle Street Chicago,</li>
                <li>Illinois 60602</li>
                <li>+ 55 11 9999 - 9999
                    contact @littlelemon.com </li>
                <li>USA</li>
            </ul> */}
            </div>
            <div>
                <h4>Social Media</h4>
                <ul>
                    <li><a href="#fecabook">Facebook</a></li>
                    <li><a href="#fecabook">Twitter</a></li>
                    <li><a href="#fecabook">Insagram</a></li>
                </ul>
            </div>
        </div>

    </footer>);
}

export default Footer;








