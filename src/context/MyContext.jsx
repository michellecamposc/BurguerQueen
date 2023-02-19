import { createContext, useState } from 'react';

// Almacena los datos
export const MyContext = createContext();

// Este es el componente que engloba al resto de componentes
export const MyContextProvider = ({ children }) => {
	// State para seleccionar la mesa
	const [selectedTable, setSelectedTable] = useState('');

	// State to store selected category
	const [selectedCategory, setSelectedCategory] = useState('');

	// State para añadir productos al carrito
	const [addedProduct, setAddedProduct] = useState([]);

	// Función para borras todos los productos del carrito
	const clearAllProducts = (item) => {
		setAddedProduct(addedProduct.filter((product) => product.id !== item));
	};

	// Contador y función para sumar más productos desde el carrito
	const [counter, setCounter] = useState(1);
	const handleAdd = () => {
		setCounter(counter + 1);
	};

	// Función eliminar productos de la orden
	const handleRemove = () => {
		setCounter(counter - 1);
	};

	// Calcular el total del carrito
	const totalPrice = () => {
		const reducer = (totalAcc, addedProduct) =>
			totalAcc + addedProduct.price * counter;
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
		handleAdd,
		counter,
		handleRemove,
		selectedCategory,
		setSelectedCategory,
	};

	return <MyContext.Provider value={props}>{children}</MyContext.Provider>;
};
