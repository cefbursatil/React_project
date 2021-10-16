import React, { useState} from "react";


const ItemCount = ({stock, initial = 0, onAdd}) => {
	const [count, setCount] = useState(initial)

	return (
		<div>
			<div>
				<button disabled={stock === 0 || count <= 0} onClick={() => setCount(count - 1)}>-</button>
				<span>{stock === 0 ? 'Sin stock' : count}</span>
				<button disabled={stock === 0 || count >= stock } onClick={() => setCount(count + 1)}>+</button>
			</div>
			<button disabled={stock === 0 || count <= 0 || count > stock} onClick={() => onAdd(count)}>Agregar al carrito</button>
			<span className="total-stock">Stock: {stock - count}</span>
		</div>
	)
}


export default ItemCount

