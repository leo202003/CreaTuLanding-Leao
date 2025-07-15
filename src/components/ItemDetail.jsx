export function ItemDetail({ title, price, description, images }) {
    return (
        <div className="card p-4">
            <h2>{title}</h2>
            <p><strong>Precio:</strong> ${price}</p>
            <p>{description}</p>
            
            <div className="row">
                {images?.slice(0, 3).map((img, index) => (
                    <div className="col-md-4" key={index}>
                        <img src={img} alt={title} className="img-fluid rounded mb-2" />
                    </div>
                ))}
            </div>
        </div>
  );
}
