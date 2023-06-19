
import { useLocation, useNavigate } from "react-router-dom";


const Confirm = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    const location = useLocation();
    const data = location.state;
    return (<div className="confirm">
        <h1>Thank you for your reservation!</h1>
        <h2>We look forward to seeing you at Little Lemon.</h2>
        <div className="confirm-box">
            <span>Confirmation details</span>
            <p>{data.date}</p>
            <p>{data.time} </p>
            <p>{data.option}</p>
            <p>{data.number}</p>
            {/* <p>Date: 2023-06-17</p> */}

        </div>
        <button className="btn" onClick={home}>Back To Home</button>
    </div>);
}

export default Confirm;