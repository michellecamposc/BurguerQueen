import { createContext, useState } from 'react';
import menu from '../data/menu.json';
// Este almacena los datos
export const MyContext = createContext();

// Este es el componente que engloba al resto de componentes
export const MyContextProvider = ({ children }) => {
	// State para seleccionar la mesa
	const [selectedTable, setSelectedTable] = useState('');

	// State para añadir productos al carrito
	const [addedProduct, setAddedProduct] = useState([]);

	// Función para borras todos los productos del carrito
	const clearAllProducts = (item) => {
		setAddedProduct(addedProduct.filter((product) => product.id !== item));
	};

	// Función para agregar más productos desde la orden

	// Calcular el total del carrito
	const totalPrice = () => {
		const reducer = (totalAcc, addedProduct) => totalAcc + addedProduct.price;
		const sum = addedProduct.reduce(reducer, 0);
		return sum;
	};

	const props = {
		selectedTable,
		setSelectedTable,
		addedProduct,
		setAddedProduct,
		clearAllProducts,
		totalPrice,
	};

	return <MyContext.Provider value={props}>{children}</MyContext.Provider>;
};
