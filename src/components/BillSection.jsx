import styles from '../styles/TakeOrder.module.css';
import { FaMinus } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

// Componente donde se muestra la mesa seleccionada
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

// Componente para productos añadidos
export const ProductCards = ({ addedProduct, item }) => {
	const { name, price } = addedProduct;
	const { handleAdd, counter, handleRemove } = useContext(MyContext);

	return (
		<IconContext.Provider value={{ color: 'rgba(255, 255, 255, 1)' }}>
			<section className={styles.currentOrderContainer}>
				<section id={styles.productsDescription}>
					<h3>{name}</h3>
					<p>${price * counter} clp</p>
				</section>
				<section className={styles.firstBtnContainer}>
					<section className={styles.btnsContainer}>
						<button className={styles.addAndDeleteButton}>
							<FaMinus onClick={() => handleRemove(item)} />
						</button>
						<h3>{counter}</h3>
						<button className={styles.addAndDeleteButton}>
							<BsPlusLg onClick={() => handleAdd(item)} />
						</button>
					</section>
				</section>
			</section>
		</IconContext.Provider>
	);
};
