import styles from '../styles/TakeOrder.module.css';

// Componente de mesa
export const FirstBillSection = () => {
	return (
		<article className={styles.tableInformation}>
			<h2>Mesa: </h2>
			<section id={styles.currentOrder}>
				<h1>Orden actual</h1>
				<button id={styles.clearButton}>Limpiar</button>
			</section>
		</article>
	);
};

// Componente de productos añadidos
export const addedProducts = () => {
	return (
		<section id={styles.currentOrder}>
			<h1>Orden actual</h1>
			<button id={styles.clearButton}>Limpiar</button>
		</section>
	);
};

// Componente de enviar orden
export const SendOrderButton = () => {
	return (
		<>
			<article className={styles.priceContainer}>
				<section className={styles.informationContainer}>
					<h3>Total</h3>
					<div id={styles.price}>
						<h3>3400clp</h3>
					</div>
				</section>
			</article>
			<button className={styles.sendOrderButton}>Enviar Orden</button>
		</>
	);
};
