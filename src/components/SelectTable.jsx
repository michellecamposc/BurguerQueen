import styles from '../styles/TakeOrder.module.css';
import { IconContext } from 'react-icons/lib';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

// Component to select tables
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
