import { ItemsContainer } from '../components/ItemsContainer';
import styles from '../styles/Kitchen.module.css';
import { deleteOrder } from '../firebase/firebaseConfig';

export const CommandsCard = ({ order }) => {
	const handleOrderReady = (orderId) => {
		deleteOrder(orderId);
	};

	return (
		<div id={styles.CommandsCardContainer}>
			<div key={order.id} id={styles.CommandsInformationContainer}>
				<section id={styles.tableContainer}>
					<h2>Mesa {order.mesa}</h2>
				</section>
				<section id={styles.productAndAmount}>
					<h3>Producto</h3>
					<h3>Cantidad</h3>
				</section>
				<ItemsContainer id={order.id} addedProducts={order.productos} />
				<section id={styles.readyBtnContainer}>
					<button
						id={styles.readyBtn}
						onClick={() => handleOrderReady(order.id)}
					>
						Pedido listo
					</button>
				</section>
			</div>
		</div>
	);
};
