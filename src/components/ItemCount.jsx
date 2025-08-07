import { useEffect } from 'react'

export function ItemCount({ quantity, setQuantity }) {

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        } else if (e.target.value === '') {
            setQuantity('');
        }
    };

    useEffect(() => {
        if (quantity === '' || quantity === 0) {
            setQuantity(1);
        }
    }, []);

  return (
    <div className="cantidad-group">
        <label htmlFor="cantidad">Cantidad:</label>
        <input
            id="cantidad"
            type="number"
            min="1"
            value={quantity}
            onChange={handleChange}
        />
    </div>
  )
}
