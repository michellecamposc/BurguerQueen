import styles from '../styles/Kitchen.module.css';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

export const KitchenHeader = () => {
	return (
		<section id={styles.headerKitchenContainer}>
			<h2 id={styles.welcomeTitle}>DejaBurg</h2>
			<section id={styles.commandTitle}>
				<h2>Comandas actuales</h2>
			</section>
			<Link to='/'>
				<button id={styles.btnClose}>
					<FaSignOutAlt color='rgba(43, 43, 43, 1)' />
					Salir
				</button>
			</Link>
		</section>
	);
};
