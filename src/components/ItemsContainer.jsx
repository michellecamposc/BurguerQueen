import styles from '../styles/Kitchen.module.css';

export const ItemsContainer = ({ addedProducts, id }) => {
	return (
		<section id={styles.orderContainer}>
			{addedProducts.map((addedProduct, index) => (
				<article
					key={`${id}-${addedProduct.nombre}-${index}`}
					id={styles.productContainer}
				>
					<section id={styles.productContainer}>
						<h3>{addedProduct.nombre}</h3>
					</section>
					<section id={styles.amountContainer}>
						<h3>{addedProduct.precio}</h3>
					</section>
				</article>
			))}
		</section>
	);
};
