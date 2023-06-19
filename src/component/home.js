import foto from '../restauranfood.jpg';
const Home = () => {
    return (
        <section className='home'>

            <div className="home-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>

            </div>
            <img className='image' src={foto} alt="" />

        </section>



    );
}

export default Home;