import styles from '../styles/Kitchen.module.css';

export const ItemsContainer = ({ addedProducts }) => {
	return (
		<section id={styles.orderContainer}>
			{addedProducts.map((addedProduct) => (
				<article key={addedProduct.id} id={styles.productContainer}>
					<h3>{addedProduct.name}</h3>
				</article>
			))}
		</section>
	);
};
