
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Reservations = () => {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState({});
    const home = () => {
        navigate("/confirm", { state: inputText });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputText({ ...inputText, [e.target.name]: e.target.value })
    }
    return (
        <div className="form-val">
            <h1>Book Now</h1>
            <form className="form">
                <label>Choose Date</label>
                <input name="date" onInput={handleSubmit} type="date" />
                <label>Choose Date</label>
                <input name="time" onInput={handleSubmit} type="time" />
                <label>Number of gustes</label>
                <input name="number" onInput={handleSubmit} type="number" min='1' max='20' />
                <label>Occasion</label>
                <select name="option" onInput={handleSubmit} >
                    <option value="Birthday">Birthday</option>
                    <option value="Engagment">Engagment</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <button className="btn" type="submit" onClick={home}>Make Your Reservation</button>
            </form>
        </div>);
}

export default Reservations;