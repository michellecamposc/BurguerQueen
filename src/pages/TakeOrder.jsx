import { BillSection } from '../components/BillSection';
import { CardProduct } from '../components/CardProduct';
import { NavBar, SelectTable, MenuOptions } from '../components/NavBar';
import styles from '../styles/TakeOrder.module.css';

export const TakeOrder = () => {
	return (
		<div id={styles.orderContainer}>
			<div id={styles.navContainer}>
				<NavBar />
			</div>
			<div id={styles.menuContainer}>
				<section id={styles.productsContainer}>
					<SelectTable />
					<MenuOptions />
					<CardProduct />
				</section>
				{/* 		<section id={styles.billContainer}>
					<BillSection></BillSection>
				</section> */}
			</div>
			<div id={styles.billContainer}></div>
		</div>
	);
};
