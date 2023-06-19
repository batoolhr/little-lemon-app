const Card = ({ product }) => {
    return (


        <div className="box-1">
            <div className="card-box">
                <img className='image-1' src={product.image} alt='' />
                <div className="title">
                    <h2>{product.title}</h2>
                    <span>{product.price}</span>
                </div>
                <p>{product.content}</p>
                <div className="content-type">
                    <span>{product.type}</span>
                    {/* <span>{product.icon}</span> */}
                    <img src={product.icon} alt=" " />
                </div>


            </div>
        </div>
    );
}

export default Card; 
