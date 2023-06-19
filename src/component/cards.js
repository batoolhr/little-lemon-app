const Cards = ({ item }) => {
    return (
        <div className="cards-box">
            <i>{item.rate}</i>
            <div className="content-type">
                <img className="image-icon" src={item.image} alt="" />
                <span>{item.name}</span>
            </div>
            <p>❝ {item.content} ❞</p>

        </div>


    );
}

export default Cards;