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
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

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
			<Link to='/'>
				<button id={styles.btnClose}>
					<FaSignOutAlt color='rgba(43, 43, 43, 1)' />
					Salir
				</button>
			</Link>
		</section>
	);
};

//  Componente para seleccionar mesas
export const SelectTable = () => {
	const { setSelectedTable } = useContext(MyContext);
	return (
		<IconContext.Provider value={{ color: 'rgba(56, 56, 56, 1)' }}>
			<div className={styles.tableSection}>
				<h2>Selecciona la mesa</h2>
				<section className={styles.optionContainer}>
					<div className={styles.buttonsContainer}>
						<button
							className={styles.tableButton}
							onClick={(event) => setSelectedTable('1')}
						>
							<FaUserAlt />
							Mesa 1
						</button>
						<button
							className={styles.tableButton}
							onClick={(event) => setSelectedTable('2')}
						>
							<FaUserAlt />
							Mesa 2
						</button>
						<button
							className={styles.tableButton}
							onClick={(event) => setSelectedTable('3')}
						>
							<FaUserAlt />
							Mesa 3
						</button>
						<button
							className={styles.tableButton}
							onClick={(event) => setSelectedTable('4')}
						>
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
	const { setSelectedCategory } = useContext(MyContext);

	return (
		<div className={styles.tableSection}>
			<h2>Menú</h2>
			<section className={styles.optionContainer}>
				<div className={styles.buttonsContainer}>
					<button className={styles.menuButton} onClick={() => setSelectedCategory('Breakfast') }>
						<FaCoffee /> Desayuno
					</button>
					<button className={styles.menuButton} onClick={() => setSelectedCategory('Lunch') }>
						<FaUtensils /> Almuerzo/Cena
					</button>
					<button
						className={styles.menuButton}
						onClick={() => setSelectedCategory('Beverages') }
					>
						<FaCocktail />
						Para tomar
					</button>
					<button
						className={styles.menuButton}
						onClick={() => setSelectedCategory('Accompaniments') }
					>
						<FaDollarSign />
						Agregados
					</button>
				</div>
			</section>
		</div>
	);
};
