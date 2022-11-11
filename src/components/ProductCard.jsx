import styles from '../styles/TakeOrder.module.css';

// Tarjeta de desayuno y para tomar
export const ProductCard = ({ item }) => {
	const { name, price, description, image } = item;
	return (
		<div className={styles.productCard}>
			<div id={styles.productImage}>
				<img src={image} alt='menu' />
			</div>
			<div id={styles.productInformation}>
				<h1>{name}</h1>
				<p>{description}</p>
				<h3>${price + 'clp'}</h3>
			</div>
		</div>
	);
};

// Tarjeta de almuerzo
export const LunchCard = ({ item }) => {
	const { name, price, description, image } = item;
	return (
		<div className={styles.productCard}>
			<div id={styles.productImage}>
				<img src={image} alt='menu' />
			</div>
			<div id={styles.productInformation}>
				<h1>{name}</h1>
				<p>{description}</p>
				<h3>${price + 'clp'}</h3>
				<h4>Selecciona la proteína</h4>
			</div>
			<div id={styles.proteinContainer}>
				<button className={styles.proteinBtn}>Carne</button>
				<button className={styles.proteinBtn}>Pollo</button>
				<button className={styles.proteinBtn}>Vegetariana</button>
			</div>
		</div>
	);
};

// Renderizado de listas y props
// metodo tofixed
// renderizado condicional
// use state
