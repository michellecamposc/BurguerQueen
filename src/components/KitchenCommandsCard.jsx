import styles from '../styles/Kitchen.module.css';
import { MdTimer } from 'react-icons/md';

export const CommandsCard = () => {
	return (
		<div id={styles.CommandsCardContainer}>
			<section id={styles.timerContainer}>
				<h2>Mesa 2</h2>
				<h2>
					<MdTimer />
					5:00
				</h2>
			</section>
			<section id={styles.productAndAmount}>
				<h3>Producto</h3>
				<h3>Cantidad</h3>
			</section>
			<section id={styles.orderContainer}></section>
			<section id={styles.readyBtnContainer}>
				<button id={styles.readyBtn}>Pedido listo </button>
			</section>
		</div>
	);
};

// Componente que muestra cada plato a cocinar
export const ItemsContainer = () => {
	<section id={styles.orderContainer}>
		<article id={styles.productContainer}>
			<h3>Arroz</h3>
			<h3>Arroz</h3>
			<h3>Arroz</h3>
			<h3>Arroz</h3>
		</article>
		<article id={styles.amountContainer}>
			<h3>1</h3>
			<h3>2</h3>
			<h3>1</h3>
			<h3>3</h3>
		</article>
	</section>;
};
