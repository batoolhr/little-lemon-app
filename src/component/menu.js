import Card from './card';
import { data } from './data.js';
const Menu = () => {
    return (
        <div className='menu-content'>
            <div className='menu'>
                <h1>This weeks specials!</h1>
                <button className="btn">Online Menu</button>
            </div>
            <div className='box'>
                {data.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>


    );
}

export default Menu;