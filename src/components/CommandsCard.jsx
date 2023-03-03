import { ItemsContainer } from '../components/ItemsContainer';
import styles from '../styles/Kitchen.module.css';

export const CommandsCard = ({ order }) => {
	console.log('Esto es', order);
	return (
		<div id={styles.CommandsCardContainer}>
			<div key={order.id}>
				<section id={styles.tableContainer}>
					<h2>Mesa {order.mesa}</h2>
				</section>
				<section id={styles.productAndAmount}>
					<h3>Producto</h3>
					<h3>Cantidad</h3>
				</section>
				<ItemsContainer id={order.id} addedProducts={order.productos} />
				<section id={styles.readyBtnContainer}>
					<button id={styles.readyBtn}>Pedido listo</button>
				</section>
			</div>
		</div>
	);
};
