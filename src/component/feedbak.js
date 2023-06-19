import Cards from './cards';
import { data } from './feeddata';
const Feedback = () => {
    return (

        <div className="feedback-content">
            <h1>What ours customers say!</h1>
            <div>
                <div className="Card-style" >
                    {data.map(item => (
                        <Cards key={item.id} item={item} />
                    ))}


                </div>
            </div>
        </div>);
}

export default Feedback; 