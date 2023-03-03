import { createContext, useState } from 'react';

// Store the data
export const MyContext = createContext();

// This is the component that encompasses the rest of the components
export const MyContextProvider = ({ children }) => {
	// State to select the table
	const [selectedTable, setSelectedTable] = useState('');

	// State to store selected category
	const [selectedCategory, setSelectedCategory] = useState('');

	// State to add products to cart
	const [addedProduct, setAddedProduct] = useState([]);

	// Function to delete all products from the cart
	const clearAllProducts = (item) => {
		setAddedProduct(addedProduct.filter((product) => product.id !== item));
	};

	// Counter and function to add more products from the cart
	const [counter, setCounter] = useState(1);
	const handleAdd = () => {
		setCounter(counter + 1);
	};

	// Function remove products from the order
	const handleRemove = () => {
		setCounter(counter - 1);
	};

	// Calculate the cart total
	const totalPrice = () => {
		const reducer = (totalAcc, addedProduct) =>
			totalAcc + addedProduct.price * counter;
		const sum = addedProduct.reduce(reducer, 0);
		return sum;
	};

	// Empty container when you send the order
	const clearCartWhenSendOrder = () => {
		setAddedProduct([]);
	};

	// Empty table container when you send the order
	const clearSelectedTable = () => {
		setSelectedTable([]);
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
		clearCartWhenSendOrder,
		clearSelectedTable,
	};

	return <MyContext.Provider value={props}>{children}</MyContext.Provider>;
};
