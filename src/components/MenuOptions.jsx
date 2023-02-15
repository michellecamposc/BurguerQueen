import styles from '../styles/TakeOrder.module.css';
import { FaCoffee, FaCocktail, FaUtensils, FaDollarSign } from 'react-icons/fa';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import db from '../data/menu.json';

//  Componente con las opciones de menú
export const MenuOptions = () => {
	const { setSelectedCategory } = useContext(MyContext);
	const lng = 'es';

	return (
		<div className={styles.tableSection}>
			<h2>Menú</h2>
			<section className={styles.optionContainer}>
				<div className={styles.buttonsContainer}>
					{db.categories.map((cat) => (
						<button
							className={styles.menuButton}
							onClick={() => setSelectedCategory(cat)}
							key={cat.id}
						>
							{
								// Product icon
								cat.code === 'BREAKFAST' ? (
									<FaCoffee />
								) : cat.code === 'LUNCH' ? (
									<FaUtensils />
								) : cat.code === 'ACCOMPANIMENTS' ? (
									<FaDollarSign />
								) : cat.code === 'BEVERAGES' ? (
									<FaCocktail />
								) : (
									<FaDollarSign />
								)
							}{' '}
							{
								// Product name
								cat.name[lng]
							}
						</button>
					))}
				</div>
			</section>
		</div>
	);
};
