import styles from '../styles/TakeOrder.module.css';

//  Componente de barra de navegación
export const NavBar = () => {
	return (
		<section id={styles.headerContainer}>
			<h2 id={styles.welcomeTitle}>Bienvenida, Stephanie</h2>
			<section>
				<input
					type='search'
					id={styles.searchBar}
					placeholder='🔍     Qué estás buscando?'
				/>
			</section>
			<button id={styles.btnClose}> Salir</button>
		</section>
	);
};

//  Componente para seleccionar mesas
export const SelectTable = () => {
	return (
		<div className={styles.tableSection}>
			<h2>Selecciona la mesa</h2>
			<section className={styles.optionContainer}>
				<div className={styles.buttonsContainer}>
					<button className={styles.tableButton}>Mesa 1</button>
					<button className={styles.tableButton}>Mesa 2</button>
					<button className={styles.tableButton}>Mesa 3</button>
					<button className={styles.tableButton}>Mesa 4</button>
				</div>
			</section>
		</div>
	);
};

//  Componente con las opciones de menú
export const MenuOptions = () => {
	return (
		<div className={styles.tableSection}>
			<h2>Menú</h2>
			<section className={styles.optionContainer}>
				<div className={styles.buttonsContainer}>
					<button className={styles.menuButton}>Desayuno</button>
					<button className={styles.menuButton}>Almuerzo/Cena</button>
					<button className={styles.menuButton}>Para tomar</button>
				</div>
			</section>
		</div>
	);
};
