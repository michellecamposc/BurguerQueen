import styles from '../styles/TakeOrder.module.css';
import { IconContext } from 'react-icons/lib';
import {
	FaSignOutAlt,
	FaUserAlt,
	FaCoffee,
	FaCocktail,
	FaUtensils,
	FaDollarSign,
} from 'react-icons/fa';
import { color } from '@mui/system';

//  Componente de barra de navegación
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
			<button id={styles.btnClose}>
				<FaSignOutAlt color='rgba(43, 43, 43, 1)' />
				Salir
			</button>
		</section>
	);
};

//  Componente para seleccionar mesas
export const SelectTable = () => {
	return (
		<IconContext.Provider value={{ color: 'rgba(56, 56, 56, 1)' }}>
			<div className={styles.tableSection}>
				<h2>Selecciona la mesa</h2>
				<section className={styles.optionContainer}>
					<div className={styles.buttonsContainer}>
						<button className={styles.tableButton}>
							<FaUserAlt />
							Mesa 1
						</button>
						<button className={styles.tableButton}>
							<FaUserAlt />
							Mesa 2
						</button>
						<button className={styles.tableButton}>
							<FaUserAlt />
							Mesa 3
						</button>
						<button className={styles.tableButton}>
							<FaUserAlt />
							Mesa 4
						</button>
					</div>
				</section>
			</div>
		</IconContext.Provider>
	);
};

//  Componente con las opciones de menú
export const MenuOptions = () => {
	return (
		<div className={styles.tableSection}>
			<h2>Menú</h2>
			<section className={styles.optionContainer}>
				<div className={styles.buttonsContainer}>
					<button
						className={styles.menuButton}
						onClick={() => {
							alert('Mostrar productos del desayuno');
						}}
					>
						<FaCoffee /> Desayuno
					</button>
					<button
						className={styles.menuButton}
						onClick={() => {
							alert('Mostrar productos del almuerzo');
						}}
					>
						<FaUtensils /> Almuerzo/Cena
					</button>
					<button
						className={styles.menuButton}
						onClick={() => {
							alert('Mostrar bebidas');
						}}
					>
						<FaCocktail />
						Para tomar
					</button>
					<button
						className={styles.menuButton}
						onClick={() => {
							alert('Mostrar acompañamientos');
						}}
					>
						<FaDollarSign />
						Agregados
					</button>
				</div>
			</section>
		</div>
	);
};
