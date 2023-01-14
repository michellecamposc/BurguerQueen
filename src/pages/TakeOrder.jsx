import {
  FirstBillSection,
	SendOrderButton,
} from '../components/BillSection';
import { ProductCard } from '../components/ProductCard';
import { NavBar, SelectTable, MenuOptions } from '../components/NavBar';
import styles from '../styles/TakeOrder.module.css';
import menu from '../data/menu.json';
import { MyContext } from '../context/MyContext';
import { useContext } from 'react';

export const TakeOrder = () => {
	const { selectedCategory } = useContext(MyContext);
  return (
		<div id={styles.orderContainer}>
			<div>
				<NavBar />
			</div>
			<div id={styles.menuContainer}>
        <section id={styles.productsContainer}>
					<SelectTable />
					<MenuOptions />
					<div id={styles.justCardProducts}>
						{menu.products?.filter(p => p.category === selectedCategory)?.map((item, index) => (
							<ProductCard key={index} item={item} />
						))}
					</div>
				</section>
				<section id={styles.billContainer}>
					<div id={styles.tableSectionContainer}>
						<FirstBillSection />
					</div>
					<div id={styles.addedProducts}>
					</div>
					<div id={styles.totalContainer}>
						<SendOrderButton />
					</div>
				</section>
			</div>
		</div>
	);
};
