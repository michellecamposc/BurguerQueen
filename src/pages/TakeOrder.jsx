import {
	CartProducts,
	FirstBillSection,
	SendOrderButton,
} from '../components/BillSection';
import { LunchCard, ProductCard } from '../components/ProductCard';
import { NavBar, SelectTable, MenuOptions } from '../components/NavBar';
import styles from '../styles/TakeOrder.module.css';
import menu from '../data/menu.json';

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
					<div id={styles.justCardProducts}>
						{menu.Breakfast.map((item, index) => (
							<ProductCard key={index} item={item} />
						))}
						{menu.Lunch.map((item, index) => (
							<LunchCard key={index} item={item} />
						))}
						{menu.Accompaniments.map((item, index) => (
							<ProductCard key={index} item={item} />
						))}
						{menu.Beverages.map((item, index) => (
							<ProductCard key={index} item={item} />
						))}
					</div>
				</section>
				<section id={styles.billContainer}>
					<div id={styles.tableSectionContainer}>
						<FirstBillSection />
					</div>
					<div id={styles.addedProducts}>
						<CartProducts />
					</div>
					<div id={styles.totalContainer}>
						<SendOrderButton />
					</div>
				</section>
			</div>
		</div>
	);
};
