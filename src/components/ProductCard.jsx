import styles from '../styles/TakeOrder.module.css';

export const ProductCard = ({ item }) => {
	const { name, price, description, image } = item;

	// Renderizado de listas y props
	return (
		<div className={styles.productCard}>
			<div id={styles.productImage}>
				<img src={image} />
			</div>
			<div id={styles.productInformation}>
				<h1>{name}</h1>
				<p>{description}</p>
				<h3>${price + 'clp'}</h3>
			</div>
		</div>
	);
};

// Renderizado de listas y props
// metodo tofixed
// renderizado condicional
// use state
