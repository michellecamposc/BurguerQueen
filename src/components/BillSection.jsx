import styles from '../styles/TakeOrder.module.css';
import { FaMinus } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';

// Component where the selected table is displayed
export const FirstBillSection = ({ item }) => {
	const { clearAllProducts, selectedTable } = useContext(MyContext);
	return (
		<>
			<article className={styles.tableInformation}>
				<h2>Mesa: </h2>
				<h2>{selectedTable}</h2>
			</article>
			<section className={styles.currentOrder}>
				<h1>Orden actual</h1>
				<button id={styles.clearButton} onClick={() => clearAllProducts(item)}>
					Limpiar
				</button>
			</section>
		</>
	);
};

// Component for added products
export const ProductCards = ({ item }) => {
	const { name, price } = item;
	const { addedProduct, setAddedProduct } = useContext(MyContext);

	// Add a single quantity status
	const [quantity, setQuantity] = useState(
		addedProduct.find((p) => p.id === item.id)?.quantity || 0
	);

	const handleAdd = (item) => {
		console.log('Se ejecuta');
		setAddedProduct((prev) => {
			const index = prev.findIndex((p) => p.id === item.id);
			if (index >= 0) {
				prev[index].quantity = quantity + 1; // Update the quantity of the product in the array
			} else {
				prev.push({ id: item.id, quantity: quantity + 1 }); // Add a new object with the quantity of the product
			}
			return [...prev];
		});

		setQuantity(quantity + 1); // Update individual quantity status
	};

	const handleDecrease = (item) => {
		console.log('Se ejecuta');
		setAddedProduct((prev) => {
			const index = prev.findIndex((p) => p.id === item.id);
			if (index >= 0) {
				prev[index].quantity = quantity - 1; // Actualizar la cantidad del producto en el arreglo
			} else {
				prev.push({ id: item.id, quantity: quantity - 1 }); // Agregar un nuevo objeto con la cantidad del producto
			}
			return [...prev];
		});

		setQuantity(quantity - 1); // Actualizar el estado de cantidad individual
	};

	return (
		<IconContext.Provider value={{ color: 'rgba(255, 255, 255, 1)' }}>
			<section className={styles.currentOrderContainer}>
				<section id={styles.productsDescription}>
					<h3>{name}</h3>
					<p>${price * quantity} clp</p>
				</section>
				<section className={styles.firstBtnContainer}>
					<section className={styles.btnsContainer}>
						<button className={styles.addAndDeleteButton}>
							<FaMinus onClick={() => handleDecrease(item)} />
						</button>
						<h3>{quantity}</h3>
						<button className={styles.addAndDeleteButton}>
							<BsPlusLg onClick={() => handleAdd(item)} />
						</button>
					</section>
				</section>
			</section>
		</IconContext.Provider>
	);
};
