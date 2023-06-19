import foto1 from '../Mario and Adrian A.jpg';
import foto2 from '../Mario and Adrian b.jpg';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h1 className='little'>Little Lemon</h1>
                <h1>Chicago</h1>
                <span>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</span>
                <span>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</span>
            </div>
            <div className='about-image'>
                <img src={foto1} alt='' className='img-1' />
                <img src={foto2} alt='' className='img-2' />
            </div>
        </section>);
}

export default About;







