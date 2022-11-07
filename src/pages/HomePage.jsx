import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

export const HomePage = () => {
	return (
		<div id={styles.homeContainer}>
			<section id={styles.buttonsContainer}>
				<img src='public/dejaBurgLogo.png' />
				<Link to='order'>
					<button id={styles.orderBtn}>Tomar pedido</button>
				</Link>
				<Link to='kitchen'>
					<button id={styles.kitchenBtn}>Cocina</button>
				</Link>
			</section>
		</div>
	);
};
