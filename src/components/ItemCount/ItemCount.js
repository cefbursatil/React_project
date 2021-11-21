import React, { useState} from "react";
import "./ItemCount.scss"

const ItemCount = ({price,stock, initial = 0, onAdd}) => {
	const [count, setCount] = useState(initial)
	return (
		<div className="contenedor_suscripcion">
			<div>
				<span className="mx-1">Meses de suscripción:  </span>
				<button className="button_clever_add" disabled={stock === 0 || count <= 0} onClick={() => setCount(count - 1)}>-</button>
				<span className="mx-3">{stock === 0 ? 'Sin stock' : count}</span>
				<button className="button_clever_add " disabled={stock === 0 || count >= stock } onClick={() => setCount(count + 1)}>+</button>
			</div>
			<div className="m-3">
				<h3>{`Precio Total: $${price*count}`}</h3>
			</div>
			<button className="button_clever mb-5" disabled={stock === 0 || count <= 0 || count > stock} onClick={() => onAdd(count)}>
				{`Agregar al carrito`}
			</button>
		</div>
	)
}


export default ItemCount

