import styles from '../styles/TakeOrder.module.css';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { newOrder } from '../firebase/firebaseConfig';

// Componente de botón de enviar orden
export const SendOrderButton = () => {
	const { totalPrice, addedProduct } = useContext(MyContext);

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
				onClick={() => newOrder(addedProduct)}
			>
				Enviar Orden
			</button>
		</>
	);
};
