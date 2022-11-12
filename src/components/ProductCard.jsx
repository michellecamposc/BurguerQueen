import styles from '../styles/TakeOrder.module.css';
import { BsPlusCircleFill } from 'react-icons/bs';

// Tarjeta para desayuno, para tomar y agregrados
export const ProductCard = ({ item }) => {
	const { name, price, description, image } = item;
	return (
		<section className={styles.productCard}>
			<div className={styles.imageAndButtonContainer}>
				<section className={styles.imageContainer}>
					<img src={image} alt='menu' />
				</section>
				<section className={styles.addButton}>
					<BsPlusCircleFill size={'2em'} color={'#4D4D4D'} />
				</section>
			</div>

			<article id={styles.productInformation}>
				<h1>{name}</h1>
				<p>{description}</p>
				<h3>${price + 'clp'}</h3>
			</article>
		</section>
	);
};

// Tarjeta de almuerzo
export const LunchCard = ({ item }) => {
	const { name, price, description, image } = item;
	return (
		<section className={styles.productCard}>
			<div className={styles.imageAndButtonContainer}>
				<section className={styles.imageContainer}>
					<img src={image} alt='menu' />
				</section>
				<section className={styles.addButton}>
					<BsPlusCircleFill size={'2em'} color={'#4D4D4D'} />
				</section>
			</div>
			<article id={styles.productInformation}>
				<h1>{name}</h1>
				<p>{description}</p>
				<h3>${price + 'clp'}</h3>
				<h4>Selecciona la proteína</h4>
			</article>
			<div id={styles.proteinContainer}>
				<button className={styles.proteinBtn}>Carne</button>
				<button className={styles.proteinBtn}>Pollo</button>
				<button className={styles.proteinBtn}>Vegetariana</button>
			</div>
		</section>
	);
};

// Renderizado de listas y props
// metodo tofixed
// renderizado condicional
// use state
