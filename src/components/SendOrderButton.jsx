import styles from '../styles/TakeOrder.module.css';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { newOrder } from '../firebase/firebaseConfig';

// Submit order button component
export const SendOrderButton = () => {
	const {
		totalPrice,
		addedProduct,
		clearCartWhenSendOrder,
		selectedTable,
		clearSelectedTable,
	} = useContext(MyContext);

	return (
		<>
			<article className={styles.priceContainer}>
				<section className={styles.informationContainer}>
					<h3>Total</h3>
					<div id={styles.price}>
						<h3>${totalPrice()}</h3>
					</div>
				</section>
			</article>
			<button
				className={styles.sendOrderButton}
				onClick={() =>
					newOrder(
						addedProduct,
						selectedTable,
						clearCartWhenSendOrder,
						clearSelectedTable
					)
				}
			>
				Enviar Orden
			</button>
		</>
	);
};
