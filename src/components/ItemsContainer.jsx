import styles from '../styles/Kitchen.module.css';

export const ItemsContainer = ({ products }) => {
	return (
		<section id={styles.orderContainer}>
			{products.map((product) => (
				<article key={product.id} id={styles.productContainer}>
					<h3>{product.name}</h3>
				</article>
			))}
		</section>
	);
};
