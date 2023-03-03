import styles from '../styles/TakeOrder.module.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Navbar component
export const NavBar = () => {
	return (
		<section id={styles.headerContainer}>
			<h2 id={styles.welcomeTitle}>Bienvenida, Stephanie</h2>
			<section>
				<input
					type='search'
					id={styles.searchBar}
					placeholder='🔍   Qué estás buscando?'
				/>
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
